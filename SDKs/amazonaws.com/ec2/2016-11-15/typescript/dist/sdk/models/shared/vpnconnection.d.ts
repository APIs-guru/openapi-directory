import { SpeakeasyBase } from "../../../internal/utils";
import { VpnConnectionOptions } from "./vpnconnectionoptions";
import { VpnStaticRoute } from "./vpnstaticroute";
import { VpnStateEnum } from "./vpnstateenum";
import { Tag } from "./tag";
import { GatewayTypeEnum } from "./gatewaytypeenum";
import { VgwTelemetry } from "./vgwtelemetry";
/**
 * Describes a VPN connection.
**/
export declare class VpnConnection extends SpeakeasyBase {
    category?: string;
    customerGatewayConfiguration?: string;
    customerGatewayId?: string;
    options?: VpnConnectionOptions;
    routes?: VpnStaticRoute[];
    state?: VpnStateEnum;
    tags?: Tag[];
    transitGatewayId?: string;
    type?: GatewayTypeEnum;
    vgwTelemetry?: VgwTelemetry[];
    vpnConnectionId?: string;
    vpnGatewayId?: string;
}
