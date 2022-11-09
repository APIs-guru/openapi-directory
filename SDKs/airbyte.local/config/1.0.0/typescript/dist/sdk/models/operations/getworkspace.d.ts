import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetWorkspaceRequest extends SpeakeasyBase {
    request: shared.WorkspaceIdRequestBody;
}
export declare class GetWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
    workspaceRead?: shared.WorkspaceRead;
}
