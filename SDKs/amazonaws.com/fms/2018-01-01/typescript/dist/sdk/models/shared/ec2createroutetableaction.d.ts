import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTarget } from "./actiontarget";
/**
 * Information about the CreateRouteTable action in Amazon EC2.
**/
export declare class Ec2CreateRouteTableAction extends SpeakeasyBase {
    description?: string;
    vpcId: ActionTarget;
}
