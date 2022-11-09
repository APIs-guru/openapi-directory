import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicationSubnetGroup } from "./replicationsubnetgroup";


// DescribeReplicationSubnetGroupsResponse
/** 
 * <p/>
**/
export class DescribeReplicationSubnetGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=ReplicationSubnetGroups", elemType: shared.ReplicationSubnetGroup })
  replicationSubnetGroups?: ReplicationSubnetGroup[];
}
