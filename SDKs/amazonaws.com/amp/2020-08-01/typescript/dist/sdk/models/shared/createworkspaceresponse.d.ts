import { SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceStatus } from "./workspacestatus";
/**
 * Represents the output of a CreateWorkspace operation.
**/
export declare class CreateWorkspaceResponse extends SpeakeasyBase {
    arn: string;
    status: WorkspaceStatus;
    tags?: Map<string, string>;
    workspaceId: string;
}
