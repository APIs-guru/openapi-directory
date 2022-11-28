import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionTarget } from "./actiontarget";



// Ec2ReplaceRouteTableAssociationAction
/** 
 * Information about the ReplaceRouteTableAssociation action in Amazon EC2.
**/
export class Ec2ReplaceRouteTableAssociationAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationId" })
  associationId: ActionTarget;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=RouteTableId" })
  routeTableId: ActionTarget;
}
