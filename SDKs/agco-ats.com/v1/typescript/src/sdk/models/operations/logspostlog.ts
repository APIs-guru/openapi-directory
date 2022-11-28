import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LogsPostLogQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Message" })
  message: string;
}


export class LogsPostLogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: LogsPostLogQueryParams;
}


export class LogsPostLogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  logsPostLog200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  logsPostLog200ApplicationXmlString?: string;

  @SpeakeasyMetadata()
  logsPostLog200TextJsonString?: string;

  @SpeakeasyMetadata()
  logsPostLog200TextXmlString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
