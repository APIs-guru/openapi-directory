import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentConfigInfo } from "./deploymentconfiginfo";



// GetDeploymentConfigOutput
/** 
 * Represents the output of a <code>GetDeploymentConfig</code> operation.
**/
export class GetDeploymentConfigOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentConfigInfo" })
  deploymentConfigInfo?: DeploymentConfigInfo;
}
