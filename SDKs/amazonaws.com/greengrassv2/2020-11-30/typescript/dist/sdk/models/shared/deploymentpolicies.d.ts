import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentComponentUpdatePolicy } from "./deploymentcomponentupdatepolicy";
import { DeploymentConfigurationValidationPolicy } from "./deploymentconfigurationvalidationpolicy";
import { DeploymentFailureHandlingPolicyEnum } from "./deploymentfailurehandlingpolicyenum";
/**
 * Contains information about policies that define how a deployment updates components and handles failure.
**/
export declare class DeploymentPolicies extends SpeakeasyBase {
    componentUpdatePolicy?: DeploymentComponentUpdatePolicy;
    configurationValidationPolicy?: DeploymentConfigurationValidationPolicy;
    failureHandlingPolicy?: DeploymentFailureHandlingPolicyEnum;
}
