import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationInstance } from "./replicationinstance";


// ModifyReplicationInstanceResponse
/** 
 * <p/>
**/
export class ModifyReplicationInstanceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationInstance" })
  replicationInstance?: ReplicationInstance;
}
