import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetDeploymentConfigInput
/** 
 * Represents the input of a <code>GetDeploymentConfig</code> operation.
**/
export class GetDeploymentConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentConfigName" })
  deploymentConfigName: string;
}
