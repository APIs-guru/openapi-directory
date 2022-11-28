import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListConnectionsForWorkspaceRequest extends SpeakeasyBase {
    request: shared.WorkspaceIdRequestBody;
}
export declare class ListConnectionsForWorkspaceResponse extends SpeakeasyBase {
    connectionReadList?: shared.ConnectionReadList;
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
}
