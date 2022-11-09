import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PortProtocolEnum } from "./portprotocolenum";


// HealthCheckPolicy
/** 
 * An object that represents the health check policy for a virtual node's listener.
**/
export class HealthCheckPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=healthyThreshold" })
  healthyThreshold: number;

  @Metadata({ data: "json, name=intervalMillis" })
  intervalMillis: number;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=protocol" })
  protocol: PortProtocolEnum;

  @Metadata({ data: "json, name=timeoutMillis" })
  timeoutMillis: number;

  @Metadata({ data: "json, name=unhealthyThreshold" })
  unhealthyThreshold: number;
}
