import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationSubnetGroup } from "./replicationsubnetgroup";



// ModifyReplicationSubnetGroupResponse
/** 
 * <p/>
**/
export class ModifyReplicationSubnetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationSubnetGroup" })
  replicationSubnetGroup?: ReplicationSubnetGroup;
}
