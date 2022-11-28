import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTarget } from "./actiontarget";
/**
 * Information about the ReplaceRouteTableAssociation action in Amazon EC2.
**/
export declare class Ec2ReplaceRouteTableAssociationAction extends SpeakeasyBase {
    associationId: ActionTarget;
    description?: string;
    routeTableId: ActionTarget;
}
