import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PeeringTgwInfo } from "./peeringtgwinfo";
import { TransitGatewayAttachmentStateEnum } from "./transitgatewayattachmentstateenum";
import { PeeringAttachmentStatus } from "./peeringattachmentstatus";
import { Tag } from "./tag";



// TransitGatewayPeeringAttachment
/** 
 * Describes the transit gateway peering attachment.
**/
export class TransitGatewayPeeringAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accepterTgwInfo?: PeeringTgwInfo;

  @SpeakeasyMetadata()
  creationTime?: Date;

  @SpeakeasyMetadata()
  requesterTgwInfo?: PeeringTgwInfo;

  @SpeakeasyMetadata()
  state?: TransitGatewayAttachmentStateEnum;

  @SpeakeasyMetadata()
  status?: PeeringAttachmentStatus;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: string;
}
