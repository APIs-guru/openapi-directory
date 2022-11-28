import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LogsGetLogPathParams extends SpeakeasyBase {
    id: string;
}
export declare class LogsGetLogRequest extends SpeakeasyBase {
    pathParams: LogsGetLogPathParams;
}
export declare class LogsGetLogResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiModelsLog?: shared.ApiModelsLog;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
