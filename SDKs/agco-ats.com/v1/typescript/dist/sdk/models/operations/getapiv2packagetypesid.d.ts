import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV2PackageTypesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetApiV2PackageTypesIdRequest extends SpeakeasyBase {
    pathParams: GetApiV2PackageTypesIdPathParams;
}
export declare class GetApiV2PackageTypesIdResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateSystemModelsPackageType?: shared.UpdateSystemModelsPackageType;
}
