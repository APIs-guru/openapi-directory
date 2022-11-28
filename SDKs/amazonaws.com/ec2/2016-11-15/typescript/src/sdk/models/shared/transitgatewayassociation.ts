import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAttachmentResourceTypeEnum } from "./transitgatewayattachmentresourcetypeenum";
import { TransitGatewayAssociationStateEnum } from "./transitgatewayassociationstateenum";



// TransitGatewayAssociation
/** 
 * Describes an association between a resource attachment and a transit gateway route table.
**/
export class TransitGatewayAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceId?: string;

  @SpeakeasyMetadata()
  resourceType?: TransitGatewayAttachmentResourceTypeEnum;

  @SpeakeasyMetadata()
  state?: TransitGatewayAssociationStateEnum;

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: string;

  @SpeakeasyMetadata()
  transitGatewayRouteTableId?: string;
}
