import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListDestinationsForWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WorkspaceIdRequestBody;
}


export class ListDestinationsForWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  destinationReadList?: shared.DestinationReadList;

  @SpeakeasyMetadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @SpeakeasyMetadata()
  notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
