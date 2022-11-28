import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTarget } from "./actiontarget";
/**
 * Information about the DeleteRoute action in Amazon EC2.
**/
export declare class Ec2DeleteRouteAction extends SpeakeasyBase {
    description?: string;
    destinationCidrBlock?: string;
    destinationIpv6CidrBlock?: string;
    destinationPrefixListId?: string;
    routeTableId: ActionTarget;
}
