import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationTaskAssessmentRunProgress } from "./replicationtaskassessmentrunprogress";



// ReplicationTaskAssessmentRun
/** 
 * <p>Provides information that describes a premigration assessment run that you have started using the <code>StartReplicationTaskAssessmentRun</code> operation.</p> <p>Some of the information appears based on other operations that can return the <code>ReplicationTaskAssessmentRun</code> object.</p>
**/
export class ReplicationTaskAssessmentRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssessmentProgress" })
  assessmentProgress?: ReplicationTaskAssessmentRunProgress;

  @SpeakeasyMetadata({ data: "json, name=AssessmentRunName" })
  assessmentRunName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastFailureMessage" })
  lastFailureMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskAssessmentRunArn" })
  replicationTaskAssessmentRunArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskAssessmentRunCreationDate" })
  replicationTaskAssessmentRunCreationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ResultEncryptionMode" })
  resultEncryptionMode?: string;

  @SpeakeasyMetadata({ data: "json, name=ResultKmsKeyArn" })
  resultKmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ResultLocationBucket" })
  resultLocationBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=ResultLocationFolder" })
  resultLocationFolder?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceAccessRoleArn" })
  serviceAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
