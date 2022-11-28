import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackageTypesPostRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textXml: Uint8Array;
    updateSystemModelsPackageType?: shared.UpdateSystemModelsPackageType;
    updateSystemModelsPackageType1?: shared.UpdateSystemModelsPackageType;
    updateSystemModelsPackageType2?: shared.UpdateSystemModelsPackageType;
}
export declare class PackageTypesPostRequest extends SpeakeasyBase {
    request: PackageTypesPostRequests;
}
export declare class PackageTypesPostResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    packageTypesPost200ApplicationJsonString?: string;
    packageTypesPost200ApplicationXmlString?: string;
    packageTypesPost200TextJsonString?: string;
    packageTypesPost200TextXmlString?: string;
    statusCode: number;
}
