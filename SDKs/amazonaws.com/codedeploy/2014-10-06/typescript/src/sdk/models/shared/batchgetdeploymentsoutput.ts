import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeploymentInfo } from "./deploymentinfo";


// BatchGetDeploymentsOutput
/** 
 *  Represents the output of a <code>BatchGetDeployments</code> operation. 
**/
export class BatchGetDeploymentsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentsInfo", elemType: shared.DeploymentInfo })
  deploymentsInfo?: DeploymentInfo[];
}
