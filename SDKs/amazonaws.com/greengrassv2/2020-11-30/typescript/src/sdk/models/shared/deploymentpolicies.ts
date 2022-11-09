import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentComponentUpdatePolicy } from "./deploymentcomponentupdatepolicy";
import { DeploymentConfigurationValidationPolicy } from "./deploymentconfigurationvalidationpolicy";
import { DeploymentFailureHandlingPolicyEnum } from "./deploymentfailurehandlingpolicyenum";


// DeploymentPolicies
/** 
 * Contains information about policies that define how a deployment updates components and handles failure.
**/
export class DeploymentPolicies extends SpeakeasyBase {
  @Metadata({ data: "json, name=componentUpdatePolicy" })
  componentUpdatePolicy?: DeploymentComponentUpdatePolicy;

  @Metadata({ data: "json, name=configurationValidationPolicy" })
  configurationValidationPolicy?: DeploymentConfigurationValidationPolicy;

  @Metadata({ data: "json, name=failureHandlingPolicy" })
  failureHandlingPolicy?: DeploymentFailureHandlingPolicyEnum;
}
