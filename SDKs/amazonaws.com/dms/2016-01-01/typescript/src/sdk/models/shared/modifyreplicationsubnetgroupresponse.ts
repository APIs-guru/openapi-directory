import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationSubnetGroup } from "./replicationsubnetgroup";


// ModifyReplicationSubnetGroupResponse
/** 
 * <p/>
**/
export class ModifyReplicationSubnetGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationSubnetGroup" })
  replicationSubnetGroup?: ReplicationSubnetGroup;
}
