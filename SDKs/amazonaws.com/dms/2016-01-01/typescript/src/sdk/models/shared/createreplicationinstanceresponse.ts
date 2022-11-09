import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationInstance } from "./replicationinstance";


// CreateReplicationInstanceResponse
/** 
 * <p/>
**/
export class CreateReplicationInstanceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationInstance" })
  replicationInstance?: ReplicationInstance;
}
