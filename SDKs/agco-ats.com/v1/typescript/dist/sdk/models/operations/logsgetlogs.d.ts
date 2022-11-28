import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LogsGetLogsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class LogsGetLogsRequest extends SpeakeasyBase {
    queryParams: LogsGetLogsQueryParams;
}
export declare class LogsGetLogsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseApiModelsLog?: shared.ApiPagedResponseApiModelsLog;
    contentType: string;
    statusCode: number;
}
