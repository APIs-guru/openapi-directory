import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationSubnetGroup } from "./replicationsubnetgroup";


// CreateReplicationSubnetGroupResponse
/** 
 * <p/>
**/
export class CreateReplicationSubnetGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationSubnetGroup" })
  replicationSubnetGroup?: ReplicationSubnetGroup;
}
