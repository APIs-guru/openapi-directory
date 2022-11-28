import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=connectionPool" })
  connectionPool?: VirtualNodeConnectionPool;

  @SpeakeasyMetadata({ data: "json, name=healthCheck" })
  healthCheck?: HealthCheckPolicy;

  @SpeakeasyMetadata({ data: "json, name=outlierDetection" })
  outlierDetection?: OutlierDetection;

  @SpeakeasyMetadata({ data: "json, name=portMapping" })
  portMapping: PortMapping;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: ListenerTimeout;

  @SpeakeasyMetadata({ data: "json, name=tls" })
  tls?: ListenerTls;
}
