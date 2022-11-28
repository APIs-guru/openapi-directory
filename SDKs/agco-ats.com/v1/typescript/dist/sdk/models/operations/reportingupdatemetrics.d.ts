import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportingUpdateMetricsQueryParams extends SpeakeasyBase {
    updateGroupId: string;
    bundleNumber?: number;
}
export declare class ReportingUpdateMetricsRequest extends SpeakeasyBase {
    queryParams: ReportingUpdateMetricsQueryParams;
}
export declare class ReportingUpdateMetricsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateSystemModelsUpdateMetricsData?: shared.UpdateSystemModelsUpdateMetricsData;
}
