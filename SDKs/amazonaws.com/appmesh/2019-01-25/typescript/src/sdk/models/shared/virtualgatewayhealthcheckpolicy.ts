import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayPortProtocolEnum } from "./virtualgatewayportprotocolenum";



// VirtualGatewayHealthCheckPolicy
/** 
 * An object that represents the health check policy for a virtual gateway's listener.
**/
export class VirtualGatewayHealthCheckPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=healthyThreshold" })
  healthyThreshold: number;

  @SpeakeasyMetadata({ data: "json, name=intervalMillis" })
  intervalMillis: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: VirtualGatewayPortProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=timeoutMillis" })
  timeoutMillis: number;

  @SpeakeasyMetadata({ data: "json, name=unhealthyThreshold" })
  unhealthyThreshold: number;
}
