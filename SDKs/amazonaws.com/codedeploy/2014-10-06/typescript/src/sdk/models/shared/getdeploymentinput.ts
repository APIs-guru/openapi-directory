import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetDeploymentInput
/** 
 * Represents the input of a <code>GetDeployment</code> operation.
**/
export class GetDeploymentInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentId" })
  deploymentId: string;
}
