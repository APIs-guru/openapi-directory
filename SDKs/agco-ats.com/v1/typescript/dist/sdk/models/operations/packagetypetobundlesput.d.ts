import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackageTypetoBundlesPutRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textXml: Uint8Array;
    updateSystemModelsPackageTypeIDtoBundle?: shared.UpdateSystemModelsPackageTypeIDtoBundle;
    updateSystemModelsPackageTypeIDtoBundle1?: shared.UpdateSystemModelsPackageTypeIDtoBundle;
    updateSystemModelsPackageTypeIDtoBundle2?: shared.UpdateSystemModelsPackageTypeIDtoBundle;
}
export declare class PackageTypetoBundlesPutRequest extends SpeakeasyBase {
    request: PackageTypetoBundlesPutRequests;
}
export declare class PackageTypetoBundlesPutResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
