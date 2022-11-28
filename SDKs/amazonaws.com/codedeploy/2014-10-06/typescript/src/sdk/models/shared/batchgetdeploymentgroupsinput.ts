import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchGetDeploymentGroupsInput
/** 
 * Represents the input of a <code>BatchGetDeploymentGroups</code> operation.
**/
export class BatchGetDeploymentGroupsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentGroupNames" })
  deploymentGroupNames: string[];
}
