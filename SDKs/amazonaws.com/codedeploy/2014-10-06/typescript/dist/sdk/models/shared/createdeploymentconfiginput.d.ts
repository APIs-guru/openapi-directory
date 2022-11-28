import { SpeakeasyBase } from "../../../internal/utils";
import { ComputePlatformEnum } from "./computeplatformenum";
import { MinimumHealthyHosts } from "./minimumhealthyhosts";
import { TrafficRoutingConfig } from "./trafficroutingconfig";
/**
 * Represents the input of a <code>CreateDeploymentConfig</code> operation.
**/
export declare class CreateDeploymentConfigInput extends SpeakeasyBase {
    computePlatform?: ComputePlatformEnum;
    deploymentConfigName: string;
    minimumHealthyHosts?: MinimumHealthyHosts;
    trafficRoutingConfig?: TrafficRoutingConfig;
}
