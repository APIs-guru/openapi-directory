import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceSummary } from "./workspacesummary";



// ListWorkspacesResponse
/** 
 * Represents the output of a ListWorkspaces operation.
**/
export class ListWorkspacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=workspaces", elemType: WorkspaceSummary })
  workspaces: WorkspaceSummary[];
}
