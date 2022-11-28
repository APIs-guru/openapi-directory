import { SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";
/**
 * <p>Represents the output of one of the following actions:</p> <ul> <li> <p> <i>CreateSubnetGroup</i> </p> </li> <li> <p> <i>ModifySubnetGroup</i> </p> </li> </ul>
**/
export declare class SubnetGroup extends SpeakeasyBase {
    description?: string;
    subnetGroupName?: string;
    subnets?: Subnet[];
    vpcId?: string;
}
