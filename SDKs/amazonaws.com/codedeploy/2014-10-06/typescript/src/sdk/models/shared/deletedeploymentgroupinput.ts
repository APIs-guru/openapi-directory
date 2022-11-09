import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteDeploymentGroupInput
/** 
 * Represents the input of a <code>DeleteDeploymentGroup</code> operation.
**/
export class DeleteDeploymentGroupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=deploymentGroupName" })
  deploymentGroupName: string;
}
