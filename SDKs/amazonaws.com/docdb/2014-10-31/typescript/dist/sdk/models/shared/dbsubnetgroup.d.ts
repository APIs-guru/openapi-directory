import { SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";
/**
 * Detailed information about a subnet group.
**/
export declare class DbSubnetGroup extends SpeakeasyBase {
    dbSubnetGroupArn?: string;
    dbSubnetGroupDescription?: string;
    dbSubnetGroupName?: string;
    subnetGroupStatus?: string;
    subnets?: Subnet[];
    vpcId?: string;
}
