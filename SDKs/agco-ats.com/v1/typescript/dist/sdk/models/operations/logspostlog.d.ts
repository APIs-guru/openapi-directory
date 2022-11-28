import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LogsPostLogQueryParams extends SpeakeasyBase {
    message: string;
}
export declare class LogsPostLogRequest extends SpeakeasyBase {
    queryParams: LogsPostLogQueryParams;
}
export declare class LogsPostLogResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    logsPostLog200ApplicationJsonString?: string;
    logsPostLog200ApplicationXmlString?: string;
    logsPostLog200TextJsonString?: string;
    logsPostLog200TextXmlString?: string;
    statusCode: number;
}
