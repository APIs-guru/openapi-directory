import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchGetDeploymentInstancesInput
/** 
 *  Represents the input of a <code>BatchGetDeploymentInstances</code> operation. 
**/
export class BatchGetDeploymentInstancesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId: string;

  @SpeakeasyMetadata({ data: "json, name=instanceIds" })
  instanceIds: string[];
}
