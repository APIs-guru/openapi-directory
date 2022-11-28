import { SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceStatus } from "./workspacestatus";
/**
 * Represents the properties of a workspace.
**/
export declare class WorkspaceDescription extends SpeakeasyBase {
    alias?: string;
    arn: string;
    createdAt: Date;
    prometheusEndpoint?: string;
    status: WorkspaceStatus;
    tags?: Map<string, string>;
    workspaceId: string;
}
