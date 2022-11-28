import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetDeploymentGroupInput
/** 
 * Represents the input of a <code>GetDeploymentGroup</code> operation.
**/
export class GetDeploymentGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentGroupName" })
  deploymentGroupName: string;
}
