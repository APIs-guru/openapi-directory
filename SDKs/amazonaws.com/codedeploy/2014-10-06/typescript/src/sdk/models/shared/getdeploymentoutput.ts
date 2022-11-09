import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentInfo } from "./deploymentinfo";


// GetDeploymentOutput
/** 
 * Represents the output of a <code>GetDeployment</code> operation.
**/
export class GetDeploymentOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentInfo" })
  deploymentInfo?: DeploymentInfo;
}
