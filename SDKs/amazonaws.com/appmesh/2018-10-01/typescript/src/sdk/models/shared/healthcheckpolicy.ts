import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortProtocolEnum } from "./portprotocolenum";



// HealthCheckPolicy
/** 
 * An object representing the health check policy for a virtual node's listener.
**/
export class HealthCheckPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=healthyThreshold" })
  healthyThreshold: number;

  @SpeakeasyMetadata({ data: "json, name=intervalMillis" })
  intervalMillis: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: PortProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=timeoutMillis" })
  timeoutMillis: number;

  @SpeakeasyMetadata({ data: "json, name=unhealthyThreshold" })
  unhealthyThreshold: number;
}
