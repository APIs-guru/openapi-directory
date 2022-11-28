import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpnStateEnum } from "./vpnstateenum";
import { Tag } from "./tag";
import { GatewayTypeEnum } from "./gatewaytypeenum";
import { VpcAttachment } from "./vpcattachment";



// VpnGateway
/** 
 * Describes a virtual private gateway.
**/
export class VpnGateway extends SpeakeasyBase {
  @SpeakeasyMetadata()
  amazonSideAsn?: number;

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  state?: VpnStateEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  type?: GatewayTypeEnum;

  @SpeakeasyMetadata({ elemType: VpcAttachment })
  vpcAttachments?: VpcAttachment[];

  @SpeakeasyMetadata()
  vpnGatewayId?: string;
}
