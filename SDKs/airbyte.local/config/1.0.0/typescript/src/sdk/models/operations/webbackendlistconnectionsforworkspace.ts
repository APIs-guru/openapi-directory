import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WebBackendListConnectionsForWorkspaceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WorkspaceIdRequestBody;
}


export class WebBackendListConnectionsForWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @Metadata()
  notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;

  @Metadata()
  statusCode: number;

  @Metadata()
  webBackendConnectionReadList?: shared.WebBackendConnectionReadList;
}
