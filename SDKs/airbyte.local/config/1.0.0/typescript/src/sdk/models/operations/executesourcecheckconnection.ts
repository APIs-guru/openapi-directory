import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExecuteSourceCheckConnectionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SourceCoreConfig;
}


export class ExecuteSourceCheckConnectionResponse extends SpeakeasyBase {
  @Metadata()
  checkConnectionRead?: shared.CheckConnectionRead;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @Metadata()
  statusCode: number;
}
