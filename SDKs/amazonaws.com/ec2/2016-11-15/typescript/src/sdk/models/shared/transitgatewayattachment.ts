import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayAttachmentAssociation } from "./transitgatewayattachmentassociation";
import { TransitGatewayAttachmentResourceTypeEnum } from "./transitgatewayattachmentresourcetypeenum";
import { TransitGatewayAttachmentStateEnum } from "./transitgatewayattachmentstateenum";
import { Tag } from "./tag";



// TransitGatewayAttachment
/** 
 * Describes an attachment between a resource and a transit gateway.
**/
export class TransitGatewayAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  association?: TransitGatewayAttachmentAssociation;

  @SpeakeasyMetadata()
  creationTime?: Date;

  @SpeakeasyMetadata()
  resourceId?: string;

  @SpeakeasyMetadata()
  resourceOwnerId?: string;

  @SpeakeasyMetadata()
  resourceType?: TransitGatewayAttachmentResourceTypeEnum;

  @SpeakeasyMetadata()
  state?: TransitGatewayAttachmentStateEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: string;

  @SpeakeasyMetadata()
  transitGatewayId?: string;

  @SpeakeasyMetadata()
  transitGatewayOwnerId?: string;
}
