import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationInstance } from "./replicationinstance";



// CreateReplicationInstanceResponse
/** 
 * <p/>
**/
export class CreateReplicationInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationInstance" })
  replicationInstance?: ReplicationInstance;
}
