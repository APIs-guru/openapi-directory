import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartReplicationTaskAssessmentRunMessage
/** 
 * <p/>
**/
export class StartReplicationTaskAssessmentRunMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssessmentRunName" })
  assessmentRunName: string;

  @Metadata({ data: "json, name=Exclude" })
  exclude?: string[];

  @Metadata({ data: "json, name=IncludeOnly" })
  includeOnly?: string[];

  @Metadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn: string;

  @Metadata({ data: "json, name=ResultEncryptionMode" })
  resultEncryptionMode?: string;

  @Metadata({ data: "json, name=ResultKmsKeyArn" })
  resultKmsKeyArn?: string;

  @Metadata({ data: "json, name=ResultLocationBucket" })
  resultLocationBucket: string;

  @Metadata({ data: "json, name=ResultLocationFolder" })
  resultLocationFolder?: string;

  @Metadata({ data: "json, name=ServiceAccessRoleArn" })
  serviceAccessRoleArn: string;
}
