import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StopReplicationTaskMessage
/** 
 * <p/>
**/
export class StopReplicationTaskMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn: string;
}
