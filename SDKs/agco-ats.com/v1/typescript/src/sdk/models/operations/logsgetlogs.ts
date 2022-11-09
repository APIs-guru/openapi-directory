import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LogsGetLogsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class LogsGetLogsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: LogsGetLogsQueryParams;
}


export class LogsGetLogsResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseApiModelsLog?: shared.ApiPagedResponseApiModelsLog;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
