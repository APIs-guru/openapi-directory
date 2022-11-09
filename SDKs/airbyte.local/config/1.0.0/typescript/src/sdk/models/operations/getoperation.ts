import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOperationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.OperationIdRequestBody;
}


export class GetOperationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @Metadata()
  notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;

  @Metadata()
  operationRead?: shared.OperationRead;

  @Metadata()
  statusCode: number;
}
