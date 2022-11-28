import { SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceStatus } from "./workspacestatus";
/**
 * Represents a summary of the properties of a workspace.
**/
export declare class WorkspaceSummary extends SpeakeasyBase {
    alias?: string;
    arn: string;
    createdAt: Date;
    status: WorkspaceStatus;
    tags?: Map<string, string>;
    workspaceId: string;
}
