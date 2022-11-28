import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteReplicationTaskMessage
/** 
 * <p/>
**/
export class DeleteReplicationTaskMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn: string;
}
