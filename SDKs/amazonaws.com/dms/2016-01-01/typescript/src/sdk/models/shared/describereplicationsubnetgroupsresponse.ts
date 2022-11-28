import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationSubnetGroup } from "./replicationsubnetgroup";



// DescribeReplicationSubnetGroupsResponse
/** 
 * <p/>
**/
export class DescribeReplicationSubnetGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationSubnetGroups", elemType: ReplicationSubnetGroup })
  replicationSubnetGroups?: ReplicationSubnetGroup[];
}
