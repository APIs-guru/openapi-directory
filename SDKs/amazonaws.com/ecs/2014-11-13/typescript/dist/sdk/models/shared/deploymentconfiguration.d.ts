import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentCircuitBreaker } from "./deploymentcircuitbreaker";
/**
 * Optional deployment parameters that control how many tasks run during a deployment and the ordering of stopping and starting tasks.
**/
export declare class DeploymentConfiguration extends SpeakeasyBase {
    deploymentCircuitBreaker?: DeploymentCircuitBreaker;
    maximumPercent?: number;
    minimumHealthyPercent?: number;
}
