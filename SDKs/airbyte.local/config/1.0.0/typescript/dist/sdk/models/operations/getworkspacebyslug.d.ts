import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspaceBySlugRequest extends SpeakeasyBase {
    request: shared.SlugRequestBody;
}
export declare class GetWorkspaceBySlugResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
    workspaceRead?: shared.WorkspaceRead;
}
