import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteDeploymentGroupInput
/** 
 * Represents the input of a <code>DeleteDeploymentGroup</code> operation.
**/
export class DeleteDeploymentGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentGroupName" })
  deploymentGroupName: string;
}
