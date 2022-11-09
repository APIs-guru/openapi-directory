import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteDeploymentConfigInput
/** 
 * Represents the input of a <code>DeleteDeploymentConfig</code> operation.
**/
export class DeleteDeploymentConfigInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentConfigName" })
  deploymentConfigName: string;
}
