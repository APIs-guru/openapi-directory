import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualGatewayConnectionPool } from "./virtualgatewayconnectionpool";
import { VirtualGatewayHealthCheckPolicy } from "./virtualgatewayhealthcheckpolicy";
import { VirtualGatewayPortMapping } from "./virtualgatewayportmapping";
import { VirtualGatewayListenerTls } from "./virtualgatewaylistenertls";


// VirtualGatewayListener
/** 
 * An object that represents a listener for a virtual gateway.
**/
export class VirtualGatewayListener extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionPool" })
  connectionPool?: VirtualGatewayConnectionPool;

  @Metadata({ data: "json, name=healthCheck" })
  healthCheck?: VirtualGatewayHealthCheckPolicy;

  @Metadata({ data: "json, name=portMapping" })
  portMapping: VirtualGatewayPortMapping;

  @Metadata({ data: "json, name=tls" })
  tls?: VirtualGatewayListenerTls;
}
