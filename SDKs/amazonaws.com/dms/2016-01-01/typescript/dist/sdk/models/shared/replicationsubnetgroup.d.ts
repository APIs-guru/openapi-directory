import { SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";
/**
 * Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroups</code> operation.
**/
export declare class ReplicationSubnetGroup extends SpeakeasyBase {
    replicationSubnetGroupDescription?: string;
    replicationSubnetGroupIdentifier?: string;
    subnetGroupStatus?: string;
    subnets?: Subnet[];
    vpcId?: string;
}
