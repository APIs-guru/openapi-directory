import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExecuteSourceDiscoverSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SourceCoreConfig;
}


export class ExecuteSourceDiscoverSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;

  @SpeakeasyMetadata()
  sourceDiscoverSchemaRead?: shared.SourceDiscoverSchemaRead;

  @SpeakeasyMetadata()
  statusCode: number;
}
