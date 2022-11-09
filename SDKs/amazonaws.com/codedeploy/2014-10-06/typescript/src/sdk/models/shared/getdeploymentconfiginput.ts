import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetDeploymentConfigInput
/** 
 * Represents the input of a <code>GetDeploymentConfig</code> operation.
**/
export class GetDeploymentConfigInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentConfigName" })
  deploymentConfigName: string;
}
