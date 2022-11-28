import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportingBundleStatusSummaryQueryParams extends SpeakeasyBase {
    bundleId: string;
    limit?: number;
    offset?: number;
}
export declare class ReportingBundleStatusSummaryRequest extends SpeakeasyBase {
    queryParams: ReportingBundleStatusSummaryQueryParams;
}
export declare class ReportingBundleStatusSummaryResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseUpdateSystemModelsPackageStatusSummary?: shared.ApiPagedResponseUpdateSystemModelsPackageStatusSummary;
    contentType: string;
    statusCode: number;
}
