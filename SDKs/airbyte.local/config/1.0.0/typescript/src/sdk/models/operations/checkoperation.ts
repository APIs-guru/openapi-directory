import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CheckOperationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.OperatorConfiguration;
}


export class CheckOperationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checkOperationRead?: shared.CheckOperationRead;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
