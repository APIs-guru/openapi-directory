import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteReplicationTaskMessage
/** 
 * <p/>
**/
export class DeleteReplicationTaskMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn: string;
}
