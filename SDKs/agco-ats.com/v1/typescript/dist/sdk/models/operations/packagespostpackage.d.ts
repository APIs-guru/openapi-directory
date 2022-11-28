import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesPostPackageRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textXml: Uint8Array;
    updateSystemModelsPackage?: shared.UpdateSystemModelsPackage;
    updateSystemModelsPackage1?: shared.UpdateSystemModelsPackage;
    updateSystemModelsPackage2?: shared.UpdateSystemModelsPackage;
}
export declare class PackagesPostPackageRequest extends SpeakeasyBase {
    request: PackagesPostPackageRequests;
}
export declare class PackagesPostPackageResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    packagesPostPackage200ApplicationJsonString?: string;
    packagesPostPackage200ApplicationXmlString?: string;
    packagesPostPackage200TextJsonString?: string;
    packagesPostPackage200TextXmlString?: string;
    statusCode: number;
}
