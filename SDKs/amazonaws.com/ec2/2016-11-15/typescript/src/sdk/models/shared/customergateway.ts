import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// CustomerGateway
/** 
 * Describes a customer gateway.
**/
export class CustomerGateway extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bgpAsn?: string;

  @SpeakeasyMetadata()
  certificateArn?: string;

  @SpeakeasyMetadata()
  customerGatewayId?: string;

  @SpeakeasyMetadata()
  deviceName?: string;

  @SpeakeasyMetadata()
  ipAddress?: string;

  @SpeakeasyMetadata()
  state?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  type?: string;
}
