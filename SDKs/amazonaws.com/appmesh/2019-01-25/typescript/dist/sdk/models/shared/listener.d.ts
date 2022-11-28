import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualNodeConnectionPool } from "./virtualnodeconnectionpool";
import { HealthCheckPolicy } from "./healthcheckpolicy";
import { OutlierDetection } from "./outlierdetection";
import { PortMapping } from "./portmapping";
import { ListenerTimeout } from "./listenertimeout";
import { ListenerTls } from "./listenertls";
/**
 * An object that represents a listener for a virtual node.
**/
export declare class Listener extends SpeakeasyBase {
    connectionPool?: VirtualNodeConnectionPool;
    healthCheck?: HealthCheckPolicy;
    outlierDetection?: OutlierDetection;
    portMapping: PortMapping;
    timeout?: ListenerTimeout;
    tls?: ListenerTls;
}
