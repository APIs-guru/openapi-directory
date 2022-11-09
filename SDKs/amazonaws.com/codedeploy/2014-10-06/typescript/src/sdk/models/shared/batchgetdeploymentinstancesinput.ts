import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchGetDeploymentInstancesInput
/** 
 *  Represents the input of a <code>BatchGetDeploymentInstances</code> operation. 
**/
export class BatchGetDeploymentInstancesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentId" })
  deploymentId: string;

  @Metadata({ data: "json, name=instanceIds" })
  instanceIds: string[];
}
