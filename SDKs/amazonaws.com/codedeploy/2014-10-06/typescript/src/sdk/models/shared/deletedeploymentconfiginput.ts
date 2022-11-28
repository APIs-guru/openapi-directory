import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteDeploymentConfigInput
/** 
 * Represents the input of a <code>DeleteDeploymentConfig</code> operation.
**/
export class DeleteDeploymentConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentConfigName" })
  deploymentConfigName: string;
}
