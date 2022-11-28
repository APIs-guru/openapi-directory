import { SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceSummary } from "./workspacesummary";
/**
 * Represents the output of a ListWorkspaces operation.
**/
export declare class ListWorkspacesResponse extends SpeakeasyBase {
    nextToken?: string;
    workspaces: WorkspaceSummary[];
}
