import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTarget } from "./actiontarget";
/**
 * Information about the ReplaceRoute action in Amazon EC2.
**/
export declare class Ec2ReplaceRouteAction extends SpeakeasyBase {
    description?: string;
    destinationCidrBlock?: string;
    destinationIpv6CidrBlock?: string;
    destinationPrefixListId?: string;
    gatewayId?: ActionTarget;
    routeTableId: ActionTarget;
}
