import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HealthCheckProtocolEnum } from "./healthcheckprotocolenum";



// HealthCheckConfiguration
/** 
 * Describes the settings for the health check that AWS App Runner performs to monitor the health of a service.
**/
export class HealthCheckConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HealthyThreshold" })
  healthyThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=Interval" })
  interval?: number;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=Protocol" })
  protocol?: HealthCheckProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=Timeout" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "json, name=UnhealthyThreshold" })
  unhealthyThreshold?: number;
}
