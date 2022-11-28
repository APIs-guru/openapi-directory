import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAssociationStateEnum } from "./transitgatewayassociationstateenum";



// TransitGatewayAttachmentAssociation
/** 
 * Describes an association.
**/
export class TransitGatewayAttachmentAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  state?: TransitGatewayAssociationStateEnum;

  @SpeakeasyMetadata()
  transitGatewayRouteTableId?: string;
}
