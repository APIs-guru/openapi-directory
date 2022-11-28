import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteTableAssociationState } from "./routetableassociationstate";



export class ReplaceRouteTableAssociationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationState?: RouteTableAssociationState;

  @SpeakeasyMetadata()
  newAssociationId?: string;
}
