import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationInstance } from "./replicationinstance";



// ModifyReplicationInstanceResponse
/** 
 * <p/>
**/
export class ModifyReplicationInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationInstance" })
  replicationInstance?: ReplicationInstance;
}
