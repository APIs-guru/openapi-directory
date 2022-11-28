import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTarget } from "./actiontarget";
/**
 * An action that copies the EC2 route table for use in remediation.
**/
export declare class Ec2CopyRouteTableAction extends SpeakeasyBase {
    description?: string;
    routeTableId: ActionTarget;
    vpcId: ActionTarget;
}
