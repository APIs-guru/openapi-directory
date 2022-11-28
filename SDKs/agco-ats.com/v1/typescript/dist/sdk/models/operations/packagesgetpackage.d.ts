import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesGetPackagePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PackagesGetPackageRequest extends SpeakeasyBase {
    pathParams: PackagesGetPackagePathParams;
}
export declare class PackagesGetPackageResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateSystemModelsPackage?: shared.UpdateSystemModelsPackage;
}
