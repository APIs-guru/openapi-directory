import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayVpcAttachmentOptions } from "./transitgatewayvpcattachmentoptions";
import { TransitGatewayAttachmentStateEnum } from "./transitgatewayattachmentstateenum";
import { Tag } from "./tag";



// TransitGatewayVpcAttachment
/** 
 * Describes a VPC attachment.
**/
export class TransitGatewayVpcAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTime?: Date;

  @SpeakeasyMetadata()
  options?: TransitGatewayVpcAttachmentOptions;

  @SpeakeasyMetadata()
  state?: TransitGatewayAttachmentStateEnum;

  @SpeakeasyMetadata()
  subnetIds?: string[];

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: string;

  @SpeakeasyMetadata()
  transitGatewayId?: string;

  @SpeakeasyMetadata()
  vpcId?: string;

  @SpeakeasyMetadata()
  vpcOwnerId?: string;
}
