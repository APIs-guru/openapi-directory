import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentCircuitBreaker } from "./deploymentcircuitbreaker";



// DeploymentConfiguration
/** 
 * Optional deployment parameters that control how many tasks run during a deployment and the ordering of stopping and starting tasks.
**/
export class DeploymentConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentCircuitBreaker" })
  deploymentCircuitBreaker?: DeploymentCircuitBreaker;

  @SpeakeasyMetadata({ data: "json, name=maximumPercent" })
  maximumPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=minimumHealthyPercent" })
  minimumHealthyPercent?: number;
}
