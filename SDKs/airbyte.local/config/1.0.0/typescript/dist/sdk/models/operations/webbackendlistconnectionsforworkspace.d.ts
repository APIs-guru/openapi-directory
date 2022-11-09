import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class WebBackendListConnectionsForWorkspaceRequest extends SpeakeasyBase {
    request: shared.WorkspaceIdRequestBody;
}
export declare class WebBackendListConnectionsForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
    webBackendConnectionReadList?: shared.WebBackendConnectionReadList;
}
