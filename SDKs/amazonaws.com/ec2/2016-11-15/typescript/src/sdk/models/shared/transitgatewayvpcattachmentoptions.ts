import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplianceModeSupportValueEnum } from "./appliancemodesupportvalueenum";
import { DnsSupportValueEnum } from "./dnssupportvalueenum";
import { Ipv6SupportValueEnum } from "./ipv6supportvalueenum";



// TransitGatewayVpcAttachmentOptions
/** 
 * Describes the VPC attachment options.
**/
export class TransitGatewayVpcAttachmentOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applianceModeSupport?: ApplianceModeSupportValueEnum;

  @SpeakeasyMetadata()
  dnsSupport?: DnsSupportValueEnum;

  @SpeakeasyMetadata()
  ipv6Support?: Ipv6SupportValueEnum;
}
