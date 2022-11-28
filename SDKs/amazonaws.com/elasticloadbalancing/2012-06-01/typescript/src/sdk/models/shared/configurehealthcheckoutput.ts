import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HealthCheck } from "./healthcheck";



// ConfigureHealthCheckOutput
/** 
 * Contains the output of ConfigureHealthCheck.
**/
export class ConfigureHealthCheckOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  healthCheck?: HealthCheck;
}
