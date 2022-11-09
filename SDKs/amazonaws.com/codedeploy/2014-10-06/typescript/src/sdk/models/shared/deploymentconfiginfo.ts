import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComputePlatformEnum } from "./computeplatformenum";
import { MinimumHealthyHosts } from "./minimumhealthyhosts";
import { TrafficRoutingConfig } from "./trafficroutingconfig";


// DeploymentConfigInfo
/** 
 * Information about a deployment configuration.
**/
export class DeploymentConfigInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=computePlatform" })
  computePlatform?: ComputePlatformEnum;

  @Metadata({ data: "json, name=createTime" })
  createTime?: Date;

  @Metadata({ data: "json, name=deploymentConfigId" })
  deploymentConfigId?: string;

  @Metadata({ data: "json, name=deploymentConfigName" })
  deploymentConfigName?: string;

  @Metadata({ data: "json, name=minimumHealthyHosts" })
  minimumHealthyHosts?: MinimumHealthyHosts;

  @Metadata({ data: "json, name=trafficRoutingConfig" })
  trafficRoutingConfig?: TrafficRoutingConfig;
}
