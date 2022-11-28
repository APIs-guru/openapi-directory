import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that represents a type of connection pool.
**/
export declare class VirtualGatewayHttpConnectionPool extends SpeakeasyBase {
    maxConnections: number;
    maxPendingRequests?: number;
}
