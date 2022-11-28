import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagesPutPackagePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PackagesPutPackageRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textXml: Uint8Array;
    updateSystemModelsPackage?: shared.UpdateSystemModelsPackage;
    updateSystemModelsPackage1?: shared.UpdateSystemModelsPackage;
    updateSystemModelsPackage2?: shared.UpdateSystemModelsPackage;
}
export declare class PackagesPutPackageRequest extends SpeakeasyBase {
    pathParams: PackagesPutPackagePathParams;
    request: PackagesPutPackageRequests;
}
export declare class PackagesPutPackageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
