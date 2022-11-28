import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteTableAssociationState } from "./routetableassociationstate";



// RouteTableAssociation
/** 
 * Describes an association between a route table and a subnet or gateway.
**/
export class RouteTableAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationState?: RouteTableAssociationState;

  @SpeakeasyMetadata()
  gatewayId?: string;

  @SpeakeasyMetadata()
  main?: boolean;

  @SpeakeasyMetadata()
  routeTableAssociationId?: string;

  @SpeakeasyMetadata()
  routeTableId?: string;

  @SpeakeasyMetadata()
  subnetId?: string;
}
