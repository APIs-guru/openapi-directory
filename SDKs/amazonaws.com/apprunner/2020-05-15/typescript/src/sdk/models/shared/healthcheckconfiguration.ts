import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HealthCheckProtocolEnum } from "./healthcheckprotocolenum";


// HealthCheckConfiguration
/** 
 * Describes the settings for the health check that AWS App Runner performs to monitor the health of a service.
**/
export class HealthCheckConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=HealthyThreshold" })
  healthyThreshold?: number;

  @Metadata({ data: "json, name=Interval" })
  interval?: number;

  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=Protocol" })
  protocol?: HealthCheckProtocolEnum;

  @Metadata({ data: "json, name=Timeout" })
  timeout?: number;

  @Metadata({ data: "json, name=UnhealthyThreshold" })
  unhealthyThreshold?: number;
}
