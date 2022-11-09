import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExecuteSourceDiscoverSchemaRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SourceCoreConfig;
}


export class ExecuteSourceDiscoverSchemaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @Metadata()
  sourceDiscoverSchemaRead?: shared.SourceDiscoverSchemaRead;

  @Metadata()
  statusCode: number;
}
