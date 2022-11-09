import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CheckConnectionToDestinationForUpdateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DestinationUpdate;
}


export class CheckConnectionToDestinationForUpdateResponse extends SpeakeasyBase {
  @Metadata()
  checkConnectionRead?: shared.CheckConnectionRead;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @Metadata()
  notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;

  @Metadata()
  statusCode: number;
}
