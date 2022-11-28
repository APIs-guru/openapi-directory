import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayOptions } from "./transitgatewayoptions";
import { TransitGatewayStateEnum } from "./transitgatewaystateenum";
import { Tag } from "./tag";



// TransitGateway
/** 
 * Describes a transit gateway.
**/
export class TransitGateway extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTime?: Date;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  options?: TransitGatewayOptions;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  state?: TransitGatewayStateEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  transitGatewayArn?: string;

  @SpeakeasyMetadata()
  transitGatewayId?: string;
}
