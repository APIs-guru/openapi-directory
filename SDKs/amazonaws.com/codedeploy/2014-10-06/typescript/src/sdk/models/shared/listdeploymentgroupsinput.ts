import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListDeploymentGroupsInput
/** 
 * Represents the input of a <code>ListDeploymentGroups</code> operation.
**/
export class ListDeploymentGroupsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
