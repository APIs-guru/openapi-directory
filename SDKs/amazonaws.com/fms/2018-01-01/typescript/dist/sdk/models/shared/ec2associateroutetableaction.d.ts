import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTarget } from "./actiontarget";
/**
 * The action of associating an EC2 resource, such as a subnet or internet gateway, with a route table.
**/
export declare class Ec2AssociateRouteTableAction extends SpeakeasyBase {
    description?: string;
    gatewayId?: ActionTarget;
    routeTableId: ActionTarget;
    subnetId?: ActionTarget;
}
