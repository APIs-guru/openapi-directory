import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartReplicationTaskAssessmentRunMessage
/** 
 * <p/>
**/
export class StartReplicationTaskAssessmentRunMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssessmentRunName" })
  assessmentRunName: string;

  @SpeakeasyMetadata({ data: "json, name=Exclude" })
  exclude?: string[];

  @SpeakeasyMetadata({ data: "json, name=IncludeOnly" })
  includeOnly?: string[];

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn: string;

  @SpeakeasyMetadata({ data: "json, name=ResultEncryptionMode" })
  resultEncryptionMode?: string;

  @SpeakeasyMetadata({ data: "json, name=ResultKmsKeyArn" })
  resultKmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ResultLocationBucket" })
  resultLocationBucket: string;

  @SpeakeasyMetadata({ data: "json, name=ResultLocationFolder" })
  resultLocationFolder?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceAccessRoleArn" })
  serviceAccessRoleArn: string;
}
