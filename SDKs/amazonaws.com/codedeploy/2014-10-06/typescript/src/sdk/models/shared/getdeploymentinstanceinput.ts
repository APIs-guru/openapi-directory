import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetDeploymentInstanceInput
/** 
 *  Represents the input of a <code>GetDeploymentInstance</code> operation. 
**/
export class GetDeploymentInstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId: string;

  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId: string;
}
