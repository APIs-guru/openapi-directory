import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAttachmentResourceTypeEnum } from "./transitgatewayattachmentresourcetypeenum";
import { TransitGatewayAssociationStateEnum } from "./transitgatewayassociationstateenum";



// TransitGatewayRouteTableAssociation
/** 
 * Describes an association between a route table and a resource attachment.
**/
export class TransitGatewayRouteTableAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceId?: string;

  @SpeakeasyMetadata()
  resourceType?: TransitGatewayAttachmentResourceTypeEnum;

  @SpeakeasyMetadata()
  state?: TransitGatewayAssociationStateEnum;

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: string;
}
