import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListDeploymentGroupsOutput
/** 
 * Represents the output of a <code>ListDeploymentGroups</code> operation.
**/
export class ListDeploymentGroupsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @Metadata({ data: "json, name=deploymentGroups" })
  deploymentGroups?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
