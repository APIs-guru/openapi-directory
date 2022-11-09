import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteReplicationInstanceMessage
/** 
 * <p/>
**/
export class DeleteReplicationInstanceMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn: string;
}
