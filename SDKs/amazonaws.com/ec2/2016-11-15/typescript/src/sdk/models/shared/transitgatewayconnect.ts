import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayConnectOptions } from "./transitgatewayconnectoptions";
import { TransitGatewayAttachmentStateEnum } from "./transitgatewayattachmentstateenum";
import { Tag } from "./tag";



// TransitGatewayConnect
/** 
 * Describes a transit gateway Connect attachment.
**/
export class TransitGatewayConnect extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTime?: Date;

  @SpeakeasyMetadata()
  options?: TransitGatewayConnectOptions;

  @SpeakeasyMetadata()
  state?: TransitGatewayAttachmentStateEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: string;

  @SpeakeasyMetadata()
  transitGatewayId?: string;

  @SpeakeasyMetadata()
  transportTransitGatewayAttachmentId?: string;
}
