import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackageTypesPutPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PackageTypesPutRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textXml: Uint8Array;
    updateSystemModelsPackageType?: shared.UpdateSystemModelsPackageType;
    updateSystemModelsPackageType1?: shared.UpdateSystemModelsPackageType;
    updateSystemModelsPackageType2?: shared.UpdateSystemModelsPackageType;
}
export declare class PackageTypesPutRequest extends SpeakeasyBase {
    pathParams: PackageTypesPutPathParams;
    request: PackageTypesPutRequests;
}
export declare class PackageTypesPutResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
