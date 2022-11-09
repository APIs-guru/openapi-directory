import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentConfigInfo } from "./deploymentconfiginfo";


// GetDeploymentConfigOutput
/** 
 * Represents the output of a <code>GetDeploymentConfig</code> operation.
**/
export class GetDeploymentConfigOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentConfigInfo" })
  deploymentConfigInfo?: DeploymentConfigInfo;
}
