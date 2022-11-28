import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BgpStatusEnum } from "./bgpstatusenum";



// TransitGatewayAttachmentBgpConfiguration
/** 
 * The BGP configuration information.
**/
export class TransitGatewayAttachmentBgpConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bgpStatus?: BgpStatusEnum;

  @SpeakeasyMetadata()
  peerAddress?: string;

  @SpeakeasyMetadata()
  peerAsn?: number;

  @SpeakeasyMetadata()
  transitGatewayAddress?: string;

  @SpeakeasyMetadata()
  transitGatewayAsn?: number;
}
