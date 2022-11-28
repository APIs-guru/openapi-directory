import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CarrierGatewayStateEnum } from "./carriergatewaystateenum";
import { Tag } from "./tag";



// CarrierGateway
/** 
 * Describes a carrier gateway.
**/
export class CarrierGateway extends SpeakeasyBase {
  @SpeakeasyMetadata()
  carrierGatewayId?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  state?: CarrierGatewayStateEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
