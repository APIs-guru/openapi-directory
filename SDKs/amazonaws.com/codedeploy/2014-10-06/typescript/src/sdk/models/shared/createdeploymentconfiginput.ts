import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputePlatformEnum } from "./computeplatformenum";
import { MinimumHealthyHosts } from "./minimumhealthyhosts";
import { TrafficRoutingConfig } from "./trafficroutingconfig";



// CreateDeploymentConfigInput
/** 
 * Represents the input of a <code>CreateDeploymentConfig</code> operation.
**/
export class CreateDeploymentConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computePlatform" })
  computePlatform?: ComputePlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=deploymentConfigName" })
  deploymentConfigName: string;

  @SpeakeasyMetadata({ data: "json, name=minimumHealthyHosts" })
  minimumHealthyHosts?: MinimumHealthyHosts;

  @SpeakeasyMetadata({ data: "json, name=trafficRoutingConfig" })
  trafficRoutingConfig?: TrafficRoutingConfig;
}
