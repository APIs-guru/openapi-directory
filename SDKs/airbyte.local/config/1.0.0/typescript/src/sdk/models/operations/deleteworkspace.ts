import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WorkspaceIdRequestBody;
}


export class DeleteWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @SpeakeasyMetadata()
  notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
