import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BundlesGetBundlesQueryParams extends SpeakeasyBase {
    active?: boolean;
    updateGroupId?: string;
    limit?: number;
    offset?: number;
}
export declare class BundlesGetBundlesRequest extends SpeakeasyBase {
    queryParams: BundlesGetBundlesQueryParams;
}
export declare class BundlesGetBundlesResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseUpdateSystemModelsBundle?: shared.ApiPagedResponseUpdateSystemModelsBundle;
    contentType: string;
    statusCode: number;
}
