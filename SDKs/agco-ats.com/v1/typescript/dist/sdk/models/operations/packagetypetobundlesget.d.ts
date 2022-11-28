import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackageTypetoBundlesGetQueryParams extends SpeakeasyBase {
    bundleId?: string;
    limit?: number;
    offset?: number;
}
export declare class PackageTypetoBundlesGetRequest extends SpeakeasyBase {
    queryParams: PackageTypetoBundlesGetQueryParams;
}
export declare class PackageTypetoBundlesGetResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseUpdateSystemModelsPackageTypeIDtoBundle?: shared.ApiPagedResponseUpdateSystemModelsPackageTypeIDtoBundle;
    contentType: string;
    statusCode: number;
}
