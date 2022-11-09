import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentCircuitBreaker } from "./deploymentcircuitbreaker";


// DeploymentConfiguration
/** 
 * Optional deployment parameters that control how many tasks run during a deployment and the ordering of stopping and starting tasks.
**/
export class DeploymentConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentCircuitBreaker" })
  deploymentCircuitBreaker?: DeploymentCircuitBreaker;

  @Metadata({ data: "json, name=maximumPercent" })
  maximumPercent?: number;

  @Metadata({ data: "json, name=minimumHealthyPercent" })
  minimumHealthyPercent?: number;
}
