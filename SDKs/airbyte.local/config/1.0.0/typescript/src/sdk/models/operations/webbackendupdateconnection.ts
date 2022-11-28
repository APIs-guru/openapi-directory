import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebBackendUpdateConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WebBackendConnectionUpdate;
}


export class WebBackendUpdateConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webBackendConnectionRead?: shared.WebBackendConnectionRead;
}
