import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkspaceSummary } from "./workspacesummary";


// ListWorkspacesResponse
/** 
 * Represents the output of a ListWorkspaces operation.
**/
export class ListWorkspacesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=workspaces", elemType: shared.WorkspaceSummary })
  workspaces: WorkspaceSummary[];
}
