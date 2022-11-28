import { SpeakeasyBase } from "../../../internal/utils";
import { ComputePlatformEnum } from "./computeplatformenum";
import { MinimumHealthyHosts } from "./minimumhealthyhosts";
import { TrafficRoutingConfig } from "./trafficroutingconfig";
/**
 * Information about a deployment configuration.
**/
export declare class DeploymentConfigInfo extends SpeakeasyBase {
    computePlatform?: ComputePlatformEnum;
    createTime?: Date;
    deploymentConfigId?: string;
    deploymentConfigName?: string;
    minimumHealthyHosts?: MinimumHealthyHosts;
    trafficRoutingConfig?: TrafficRoutingConfig;
}
