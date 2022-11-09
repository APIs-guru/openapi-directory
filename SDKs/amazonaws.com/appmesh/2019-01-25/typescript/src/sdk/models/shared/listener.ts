import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualNodeConnectionPool } from "./virtualnodeconnectionpool";
import { HealthCheckPolicy } from "./healthcheckpolicy";
import { OutlierDetection } from "./outlierdetection";
import { PortMapping } from "./portmapping";
import { ListenerTimeout } from "./listenertimeout";
import { ListenerTls } from "./listenertls";


// Listener
/** 
 * An object that represents a listener for a virtual node.
**/
export class Listener extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionPool" })
  connectionPool?: VirtualNodeConnectionPool;

  @Metadata({ data: "json, name=healthCheck" })
  healthCheck?: HealthCheckPolicy;

  @Metadata({ data: "json, name=outlierDetection" })
  outlierDetection?: OutlierDetection;

  @Metadata({ data: "json, name=portMapping" })
  portMapping: PortMapping;

  @Metadata({ data: "json, name=timeout" })
  timeout?: ListenerTimeout;

  @Metadata({ data: "json, name=tls" })
  tls?: ListenerTls;
}
