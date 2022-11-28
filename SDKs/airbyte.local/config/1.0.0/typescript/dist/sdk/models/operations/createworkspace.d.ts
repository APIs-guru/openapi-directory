import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateWorkspaceRequest extends SpeakeasyBase {
    request: shared.WorkspaceCreate;
}
export declare class CreateWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    statusCode: number;
    workspaceRead?: shared.WorkspaceRead;
}
