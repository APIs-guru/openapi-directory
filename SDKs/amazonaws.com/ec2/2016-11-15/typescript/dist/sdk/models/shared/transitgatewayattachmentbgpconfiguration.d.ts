import { SpeakeasyBase } from "../../../internal/utils";
import { BgpStatusEnum } from "./bgpstatusenum";
/**
 * The BGP configuration information.
**/
export declare class TransitGatewayAttachmentBgpConfiguration extends SpeakeasyBase {
    bgpStatus?: BgpStatusEnum;
    peerAddress?: string;
    peerAsn?: number;
    transitGatewayAddress?: string;
    transitGatewayAsn?: number;
}
