import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationTaskAssessmentRunProgress } from "./replicationtaskassessmentrunprogress";


// ReplicationTaskAssessmentRun
/** 
 * <p>Provides information that describes a premigration assessment run that you have started using the <code>StartReplicationTaskAssessmentRun</code> operation.</p> <p>Some of the information appears based on other operations that can return the <code>ReplicationTaskAssessmentRun</code> object.</p>
**/
export class ReplicationTaskAssessmentRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssessmentProgress" })
  assessmentProgress?: ReplicationTaskAssessmentRunProgress;

  @Metadata({ data: "json, name=AssessmentRunName" })
  assessmentRunName?: string;

  @Metadata({ data: "json, name=LastFailureMessage" })
  lastFailureMessage?: string;

  @Metadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn?: string;

  @Metadata({ data: "json, name=ReplicationTaskAssessmentRunArn" })
  replicationTaskAssessmentRunArn?: string;

  @Metadata({ data: "json, name=ReplicationTaskAssessmentRunCreationDate" })
  replicationTaskAssessmentRunCreationDate?: Date;

  @Metadata({ data: "json, name=ResultEncryptionMode" })
  resultEncryptionMode?: string;

  @Metadata({ data: "json, name=ResultKmsKeyArn" })
  resultKmsKeyArn?: string;

  @Metadata({ data: "json, name=ResultLocationBucket" })
  resultLocationBucket?: string;

  @Metadata({ data: "json, name=ResultLocationFolder" })
  resultLocationFolder?: string;

  @Metadata({ data: "json, name=ServiceAccessRoleArn" })
  serviceAccessRoleArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
