import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateWorkspaceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WorkspaceCreate;
}


export class CreateWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @Metadata()
  statusCode: number;

  @Metadata()
  workspaceRead?: shared.WorkspaceRead;
}
