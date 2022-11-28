import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputePlatformEnum } from "./computeplatformenum";
import { MinimumHealthyHosts } from "./minimumhealthyhosts";
import { TrafficRoutingConfig } from "./trafficroutingconfig";



// DeploymentConfigInfo
/** 
 * Information about a deployment configuration.
**/
export class DeploymentConfigInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computePlatform" })
  computePlatform?: ComputePlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=deploymentConfigId" })
  deploymentConfigId?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentConfigName" })
  deploymentConfigName?: string;

  @SpeakeasyMetadata({ data: "json, name=minimumHealthyHosts" })
  minimumHealthyHosts?: MinimumHealthyHosts;

  @SpeakeasyMetadata({ data: "json, name=trafficRoutingConfig" })
  trafficRoutingConfig?: TrafficRoutingConfig;
}
