import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayPortProtocolEnum } from "./virtualgatewayportprotocolenum";
/**
 * An object that represents the health check policy for a virtual gateway's listener.
**/
export declare class VirtualGatewayHealthCheckPolicy extends SpeakeasyBase {
    healthyThreshold: number;
    intervalMillis: number;
    path?: string;
    port?: number;
    protocol: VirtualGatewayPortProtocolEnum;
    timeoutMillis: number;
    unhealthyThreshold: number;
}
