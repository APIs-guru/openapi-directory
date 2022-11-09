import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 *  The task assessment report in JSON format.
**/
export declare class ReplicationTaskAssessmentResult extends SpeakeasyBase {
    assessmentResults?: string;
    assessmentResultsFile?: string;
    assessmentStatus?: string;
    replicationTaskArn?: string;
    replicationTaskIdentifier?: string;
    replicationTaskLastAssessmentDate?: Date;
    s3ObjectUrl?: string;
}
