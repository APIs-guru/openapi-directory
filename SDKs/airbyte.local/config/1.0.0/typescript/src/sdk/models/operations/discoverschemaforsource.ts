import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DiscoverSchemaForSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SourceIdRequestBody;
}


export class DiscoverSchemaForSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @SpeakeasyMetadata()
  notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;

  @SpeakeasyMetadata()
  sourceDiscoverSchemaRead?: shared.SourceDiscoverSchemaRead;

  @SpeakeasyMetadata()
  statusCode: number;
}
