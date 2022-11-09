import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationInstance } from "./replicationinstance";


// DeleteReplicationInstanceResponse
/** 
 * <p/>
**/
export class DeleteReplicationInstanceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationInstance" })
  replicationInstance?: ReplicationInstance;
}
