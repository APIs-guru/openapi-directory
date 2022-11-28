import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportingPackageStatusSummaryQueryParams extends SpeakeasyBase {
    packageId: string;
}
export declare class ReportingPackageStatusSummaryRequest extends SpeakeasyBase {
    queryParams: ReportingPackageStatusSummaryQueryParams;
}
export declare class ReportingPackageStatusSummaryResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateSystemModelsPackageStatusSummary?: shared.UpdateSystemModelsPackageStatusSummary;
}
