import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesGetPackagesQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class PackagesGetPackagesRequest extends SpeakeasyBase {
    queryParams: PackagesGetPackagesQueryParams;
}
export declare class PackagesGetPackagesResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseUpdateSystemModelsPackage?: shared.ApiPagedResponseUpdateSystemModelsPackage;
    contentType: string;
    statusCode: number;
}
