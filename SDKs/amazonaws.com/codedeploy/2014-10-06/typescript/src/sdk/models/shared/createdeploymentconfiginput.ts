import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComputePlatformEnum } from "./computeplatformenum";
import { MinimumHealthyHosts } from "./minimumhealthyhosts";
import { TrafficRoutingConfig } from "./trafficroutingconfig";


// CreateDeploymentConfigInput
/** 
 * Represents the input of a <code>CreateDeploymentConfig</code> operation.
**/
export class CreateDeploymentConfigInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=computePlatform" })
  computePlatform?: ComputePlatformEnum;

  @Metadata({ data: "json, name=deploymentConfigName" })
  deploymentConfigName: string;

  @Metadata({ data: "json, name=minimumHealthyHosts" })
  minimumHealthyHosts?: MinimumHealthyHosts;

  @Metadata({ data: "json, name=trafficRoutingConfig" })
  trafficRoutingConfig?: TrafficRoutingConfig;
}
