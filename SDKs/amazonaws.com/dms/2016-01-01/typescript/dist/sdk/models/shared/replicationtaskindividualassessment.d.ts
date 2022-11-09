import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Provides information that describes an individual assessment from a premigration assessment run.
**/
export declare class ReplicationTaskIndividualAssessment extends SpeakeasyBase {
    individualAssessmentName?: string;
    replicationTaskAssessmentRunArn?: string;
    replicationTaskIndividualAssessmentArn?: string;
    replicationTaskIndividualAssessmentStartDate?: Date;
    status?: string;
}
