import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ConnectionIdRequestBody;
}


export class GetStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connectionState?: shared.ConnectionState;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @SpeakeasyMetadata()
  notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
