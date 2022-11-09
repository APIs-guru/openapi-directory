import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListDeploymentGroupsInput
/** 
 * Represents the input of a <code>ListDeploymentGroups</code> operation.
**/
export class ListDeploymentGroupsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
