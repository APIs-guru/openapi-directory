import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportingBundlesInUpdateGroupQueryParams extends SpeakeasyBase {
    id: string;
    includeInactive: boolean;
    limit?: number;
    offset?: number;
}
export declare class ReportingBundlesInUpdateGroupRequest extends SpeakeasyBase {
    queryParams: ReportingBundlesInUpdateGroupQueryParams;
}
export declare class ReportingBundlesInUpdateGroupResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseUpdateSystemModelsBundle?: shared.ApiPagedResponseUpdateSystemModelsBundle;
    contentType: string;
    statusCode: number;
}
