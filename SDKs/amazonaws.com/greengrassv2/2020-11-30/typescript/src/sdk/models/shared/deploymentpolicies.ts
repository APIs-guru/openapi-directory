import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentComponentUpdatePolicy } from "./deploymentcomponentupdatepolicy";
import { DeploymentConfigurationValidationPolicy } from "./deploymentconfigurationvalidationpolicy";
import { DeploymentFailureHandlingPolicyEnum } from "./deploymentfailurehandlingpolicyenum";



// DeploymentPolicies
/** 
 * Contains information about policies that define how a deployment updates components and handles failure.
**/
export class DeploymentPolicies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentUpdatePolicy" })
  componentUpdatePolicy?: DeploymentComponentUpdatePolicy;

  @SpeakeasyMetadata({ data: "json, name=configurationValidationPolicy" })
  configurationValidationPolicy?: DeploymentConfigurationValidationPolicy;

  @SpeakeasyMetadata({ data: "json, name=failureHandlingPolicy" })
  failureHandlingPolicy?: DeploymentFailureHandlingPolicyEnum;
}
