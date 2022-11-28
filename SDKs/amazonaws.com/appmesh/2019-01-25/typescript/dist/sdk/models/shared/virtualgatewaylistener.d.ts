import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayConnectionPool } from "./virtualgatewayconnectionpool";
import { VirtualGatewayHealthCheckPolicy } from "./virtualgatewayhealthcheckpolicy";
import { VirtualGatewayPortMapping } from "./virtualgatewayportmapping";
import { VirtualGatewayListenerTls } from "./virtualgatewaylistenertls";
/**
 * An object that represents a listener for a virtual gateway.
**/
export declare class VirtualGatewayListener extends SpeakeasyBase {
    connectionPool?: VirtualGatewayConnectionPool;
    healthCheck?: VirtualGatewayHealthCheckPolicy;
    portMapping: VirtualGatewayPortMapping;
    tls?: VirtualGatewayListenerTls;
}
