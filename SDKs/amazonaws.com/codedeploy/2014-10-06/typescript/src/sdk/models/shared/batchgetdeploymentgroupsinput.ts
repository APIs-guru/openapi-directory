import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchGetDeploymentGroupsInput
/** 
 * Represents the input of a <code>BatchGetDeploymentGroups</code> operation.
**/
export class BatchGetDeploymentGroupsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=deploymentGroupNames" })
  deploymentGroupNames: string[];
}
