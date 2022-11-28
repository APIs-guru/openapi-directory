import { SpeakeasyBase } from "../../../internal/utils";
import { ApplianceModeSupportValueEnum } from "./appliancemodesupportvalueenum";
import { DnsSupportValueEnum } from "./dnssupportvalueenum";
import { Ipv6SupportValueEnum } from "./ipv6supportvalueenum";
/**
 * Describes the VPC attachment options.
**/
export declare class TransitGatewayVpcAttachmentOptions extends SpeakeasyBase {
    applianceModeSupport?: ApplianceModeSupportValueEnum;
    dnsSupport?: DnsSupportValueEnum;
    ipv6Support?: Ipv6SupportValueEnum;
}
