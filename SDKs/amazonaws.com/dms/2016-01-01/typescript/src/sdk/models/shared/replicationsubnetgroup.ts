import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";



// ReplicationSubnetGroup
/** 
 * Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroups</code> operation.
**/
export class ReplicationSubnetGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationSubnetGroupDescription" })
  replicationSubnetGroupDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationSubnetGroupIdentifier" })
  replicationSubnetGroupIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetGroupStatus" })
  subnetGroupStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=Subnets", elemType: Subnet })
  subnets?: Subnet[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
