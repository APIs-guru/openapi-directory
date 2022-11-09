import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartReplicationTaskAssessmentMessage
/** 
 * <p/>
**/
export class StartReplicationTaskAssessmentMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn: string;
}
