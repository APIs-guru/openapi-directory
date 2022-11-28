import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayConnectionPool } from "./virtualgatewayconnectionpool";
import { VirtualGatewayHealthCheckPolicy } from "./virtualgatewayhealthcheckpolicy";
import { VirtualGatewayPortMapping } from "./virtualgatewayportmapping";
import { VirtualGatewayListenerTls } from "./virtualgatewaylistenertls";



// VirtualGatewayListener
/** 
 * An object that represents a listener for a virtual gateway.
**/
export class VirtualGatewayListener extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionPool" })
  connectionPool?: VirtualGatewayConnectionPool;

  @SpeakeasyMetadata({ data: "json, name=healthCheck" })
  healthCheck?: VirtualGatewayHealthCheckPolicy;

  @SpeakeasyMetadata({ data: "json, name=portMapping" })
  portMapping: VirtualGatewayPortMapping;

  @SpeakeasyMetadata({ data: "json, name=tls" })
  tls?: VirtualGatewayListenerTls;
}
