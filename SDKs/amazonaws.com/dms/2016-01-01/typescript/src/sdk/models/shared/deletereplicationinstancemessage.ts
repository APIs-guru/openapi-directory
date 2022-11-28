import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteReplicationInstanceMessage
/** 
 * <p/>
**/
export class DeleteReplicationInstanceMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationInstanceArn" })
  replicationInstanceArn: string;
}
