import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackageTypesGetQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    userId?: number;
}
export declare class PackageTypesGetRequest extends SpeakeasyBase {
    queryParams: PackageTypesGetQueryParams;
}
export declare class PackageTypesGetResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseUpdateSystemModelsPackageType?: shared.ApiPagedResponseUpdateSystemModelsPackageType;
    contentType: string;
    statusCode: number;
}
