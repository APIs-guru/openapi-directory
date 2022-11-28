import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationSubnetGroup } from "./replicationsubnetgroup";



// CreateReplicationSubnetGroupResponse
/** 
 * <p/>
**/
export class CreateReplicationSubnetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationSubnetGroup" })
  replicationSubnetGroup?: ReplicationSubnetGroup;
}
