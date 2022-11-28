import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CheckConnectionToSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SourceIdRequestBody;
}


export class CheckConnectionToSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checkConnectionRead?: shared.CheckConnectionRead;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @SpeakeasyMetadata()
  notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
