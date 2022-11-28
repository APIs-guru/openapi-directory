import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateWorkspaceRequest extends SpeakeasyBase {
    request: shared.WorkspaceUpdate;
}
export declare class UpdateWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
    workspaceRead?: shared.WorkspaceRead;
}
