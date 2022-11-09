import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StopReplicationTaskMessage
/** 
 * <p/>
**/
export class StopReplicationTaskMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn: string;
}
