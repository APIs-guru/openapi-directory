import { SpeakeasyBase } from "../../../internal/utils";
import { VpnStateEnum } from "./vpnstateenum";
import { Tag } from "./tag";
import { GatewayTypeEnum } from "./gatewaytypeenum";
import { VpcAttachment } from "./vpcattachment";
/**
 * Describes a virtual private gateway.
**/
export declare class VpnGateway extends SpeakeasyBase {
    amazonSideAsn?: number;
    availabilityZone?: string;
    state?: VpnStateEnum;
    tags?: Tag[];
    type?: GatewayTypeEnum;
    vpcAttachments?: VpcAttachment[];
    vpnGatewayId?: string;
}
