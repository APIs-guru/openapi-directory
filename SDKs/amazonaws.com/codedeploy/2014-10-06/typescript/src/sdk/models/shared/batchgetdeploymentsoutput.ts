import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentInfo } from "./deploymentinfo";



// BatchGetDeploymentsOutput
/** 
 *  Represents the output of a <code>BatchGetDeployments</code> operation. 
**/
export class BatchGetDeploymentsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentsInfo", elemType: DeploymentInfo })
  deploymentsInfo?: DeploymentInfo[];
}
