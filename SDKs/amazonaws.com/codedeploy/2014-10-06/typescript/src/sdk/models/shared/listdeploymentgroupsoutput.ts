import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListDeploymentGroupsOutput
/** 
 * Represents the output of a <code>ListDeploymentGroups</code> operation.
**/
export class ListDeploymentGroupsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentGroups" })
  deploymentGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
