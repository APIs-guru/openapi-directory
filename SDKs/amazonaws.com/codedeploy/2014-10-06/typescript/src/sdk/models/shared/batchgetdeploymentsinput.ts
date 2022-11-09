import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchGetDeploymentsInput
/** 
 *  Represents the input of a <code>BatchGetDeployments</code> operation. 
**/
export class BatchGetDeploymentsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentIds" })
  deploymentIds: string[];
}
