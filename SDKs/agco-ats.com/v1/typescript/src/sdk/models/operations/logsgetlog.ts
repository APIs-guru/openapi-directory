import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LogsGetLogPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class LogsGetLogRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LogsGetLogPathParams;
}


export class LogsGetLogResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiModelsLog?: shared.ApiModelsLog;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
