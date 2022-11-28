import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartReplicationTaskAssessmentMessage
/** 
 * <p/>
**/
export class StartReplicationTaskAssessmentMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn: string;
}
