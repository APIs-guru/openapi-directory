import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportingGetClientQueryParams extends SpeakeasyBase {
    id: string;
}
export declare class ReportingGetClientRequest extends SpeakeasyBase {
    queryParams: ReportingGetClientQueryParams;
}
export declare class ReportingGetClientResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateSystemModelsClient?: shared.UpdateSystemModelsClient;
}
