import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Subnet } from "./subnet";


// ReplicationSubnetGroup
/** 
 * Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroups</code> operation.
**/
export class ReplicationSubnetGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplicationSubnetGroupDescription" })
  replicationSubnetGroupDescription?: string;

  @Metadata({ data: "json, name=ReplicationSubnetGroupIdentifier" })
  replicationSubnetGroupIdentifier?: string;

  @Metadata({ data: "json, name=SubnetGroupStatus" })
  subnetGroupStatus?: string;

  @Metadata({ data: "json, name=Subnets", elemType: shared.Subnet })
  subnets?: Subnet[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
