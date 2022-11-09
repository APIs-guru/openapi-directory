import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetDeploymentInstanceInput
/** 
 *  Represents the input of a <code>GetDeploymentInstance</code> operation. 
**/
export class GetDeploymentInstanceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentId" })
  deploymentId: string;

  @Metadata({ data: "json, name=instanceId" })
  instanceId: string;
}
