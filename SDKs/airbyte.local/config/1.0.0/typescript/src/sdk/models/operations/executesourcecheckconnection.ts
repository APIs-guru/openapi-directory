import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExecuteSourceCheckConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SourceCoreConfig;
}


export class ExecuteSourceCheckConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checkConnectionRead?: shared.CheckConnectionRead;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
