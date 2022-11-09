import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetDeploymentGroupInput
/** 
 * Represents the input of a <code>GetDeploymentGroup</code> operation.
**/
export class GetDeploymentGroupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=deploymentGroupName" })
  deploymentGroupName: string;
}
