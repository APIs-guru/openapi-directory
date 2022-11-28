import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchGetDeploymentsInput
/** 
 *  Represents the input of a <code>BatchGetDeployments</code> operation. 
**/
export class BatchGetDeploymentsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentIds" })
  deploymentIds: string[];
}
