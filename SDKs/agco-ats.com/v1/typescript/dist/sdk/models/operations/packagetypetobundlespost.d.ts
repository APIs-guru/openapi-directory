import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackageTypetoBundlesPostRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textXml: Uint8Array;
    updateSystemModelsPackageTypeIDtoBundle?: shared.UpdateSystemModelsPackageTypeIDtoBundle;
    updateSystemModelsPackageTypeIDtoBundle1?: shared.UpdateSystemModelsPackageTypeIDtoBundle;
    updateSystemModelsPackageTypeIDtoBundle2?: shared.UpdateSystemModelsPackageTypeIDtoBundle;
}
export declare class PackageTypetoBundlesPostRequest extends SpeakeasyBase {
    request: PackageTypetoBundlesPostRequests;
}
export declare class PackageTypetoBundlesPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
