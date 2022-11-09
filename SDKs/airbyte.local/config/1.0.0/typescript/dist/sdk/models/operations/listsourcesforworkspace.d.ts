import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListSourcesForWorkspaceRequest extends SpeakeasyBase {
    request: shared.WorkspaceIdRequestBody;
}
export declare class ListSourcesForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    sourceReadList?: shared.SourceReadList;
    statusCode: number;
}
