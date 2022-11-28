import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationTaskAssessmentRunProgress } from "./replicationtaskassessmentrunprogress";
/**
 * <p>Provides information that describes a premigration assessment run that you have started using the <code>StartReplicationTaskAssessmentRun</code> operation.</p> <p>Some of the information appears based on other operations that can return the <code>ReplicationTaskAssessmentRun</code> object.</p>
**/
export declare class ReplicationTaskAssessmentRun extends SpeakeasyBase {
    assessmentProgress?: ReplicationTaskAssessmentRunProgress;
    assessmentRunName?: string;
    lastFailureMessage?: string;
    replicationTaskArn?: string;
    replicationTaskAssessmentRunArn?: string;
    replicationTaskAssessmentRunCreationDate?: Date;
    resultEncryptionMode?: string;
    resultKmsKeyArn?: string;
    resultLocationBucket?: string;
    resultLocationFolder?: string;
    serviceAccessRoleArn?: string;
    status?: string;
}
