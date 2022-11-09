import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionTarget } from "./actiontarget";
import { ActionTarget } from "./actiontarget";


// Ec2ReplaceRouteTableAssociationAction
/** 
 * Information about the ReplaceRouteTableAssociation action in Amazon EC2.
**/
export class Ec2ReplaceRouteTableAssociationAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationId" })
  associationId: ActionTarget;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=RouteTableId" })
  routeTableId: ActionTarget;
}
