import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteTableAssociationState } from "./routetableassociationstate";



export class AssociateRouteTableResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: string;

  @SpeakeasyMetadata()
  associationState?: RouteTableAssociationState;
}
