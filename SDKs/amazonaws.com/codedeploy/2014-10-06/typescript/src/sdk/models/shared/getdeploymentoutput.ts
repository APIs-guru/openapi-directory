import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentInfo } from "./deploymentinfo";



// GetDeploymentOutput
/** 
 * Represents the output of a <code>GetDeployment</code> operation.
**/
export class GetDeploymentOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentInfo" })
  deploymentInfo?: DeploymentInfo;
}
