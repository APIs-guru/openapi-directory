import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportingClientInfoQueryParams extends SpeakeasyBase {
    clientId: string;
}
export declare class ReportingClientInfoRequest extends SpeakeasyBase {
    queryParams: ReportingClientInfoQueryParams;
}
export declare class ReportingClientInfoResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateSystemModelsClientInfo?: shared.UpdateSystemModelsClientInfo;
}
