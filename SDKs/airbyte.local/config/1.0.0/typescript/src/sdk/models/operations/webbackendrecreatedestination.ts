import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WebBackendRecreateDestinationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DestinationRecreate;
}


export class WebBackendRecreateDestinationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  destinationRead?: shared.DestinationRead;

  @Metadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @Metadata()
  statusCode: number;
}
