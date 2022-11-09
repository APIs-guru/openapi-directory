import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LogsPostLogQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Message" })
  message: string;
}


export class LogsPostLogRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: LogsPostLogQueryParams;
}


export class LogsPostLogResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  logsPostLog200ApplicationJsonString?: string;

  @Metadata()
  logsPostLog200ApplicationXmlString?: string;

  @Metadata()
  logsPostLog200TextJsonString?: string;

  @Metadata()
  logsPostLog200TextXmlString?: string;

  @Metadata()
  statusCode: number;
}
