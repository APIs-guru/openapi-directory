import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateWorkspaceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WorkspaceUpdate;
}


export class UpdateWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @Metadata()
  notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;

  @Metadata()
  statusCode: number;

  @Metadata()
  workspaceRead?: shared.WorkspaceRead;
}
