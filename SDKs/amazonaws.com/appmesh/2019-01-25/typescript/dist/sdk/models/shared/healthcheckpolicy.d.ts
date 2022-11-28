import { SpeakeasyBase } from "../../../internal/utils";
import { PortProtocolEnum } from "./portprotocolenum";
/**
 * An object that represents the health check policy for a virtual node's listener.
**/
export declare class HealthCheckPolicy extends SpeakeasyBase {
    healthyThreshold: number;
    intervalMillis: number;
    path?: string;
    port?: number;
    protocol: PortProtocolEnum;
    timeoutMillis: number;
    unhealthyThreshold: number;
}
