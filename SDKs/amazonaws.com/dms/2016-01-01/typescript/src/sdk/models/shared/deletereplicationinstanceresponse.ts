import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationInstance } from "./replicationinstance";



// DeleteReplicationInstanceResponse
/** 
 * <p/>
**/
export class DeleteReplicationInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationInstance" })
  replicationInstance?: ReplicationInstance;
}
