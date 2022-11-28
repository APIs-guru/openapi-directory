import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetDeploymentInput
/** 
 * Represents the input of a <code>GetDeployment</code> operation.
**/
export class GetDeploymentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId: string;
}
