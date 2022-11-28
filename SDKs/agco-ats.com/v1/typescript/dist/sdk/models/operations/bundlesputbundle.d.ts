import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BundlesPutBundlePathParams extends SpeakeasyBase {
    id: string;
}
export declare class BundlesPutBundleRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textXml: Uint8Array;
    updateSystemModelsBundle?: shared.UpdateSystemModelsBundle;
    updateSystemModelsBundle1?: shared.UpdateSystemModelsBundle;
    updateSystemModelsBundle2?: shared.UpdateSystemModelsBundle;
}
export declare class BundlesPutBundleRequest extends SpeakeasyBase {
    pathParams: BundlesPutBundlePathParams;
    request: BundlesPutBundleRequests;
}
export declare class BundlesPutBundleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
