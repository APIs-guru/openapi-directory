import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HealthCheck
/** 
 * Information about a health check.
**/
export class HealthCheck extends SpeakeasyBase {
  @SpeakeasyMetadata()
  healthyThreshold: number;

  @SpeakeasyMetadata()
  interval: number;

  @SpeakeasyMetadata()
  target: string;

  @SpeakeasyMetadata()
  timeout: number;

  @SpeakeasyMetadata()
  unhealthyThreshold: number;
}
