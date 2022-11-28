import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BundlesPostBundleRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    textXml: Uint8Array;
    updateSystemModelsBundle?: shared.UpdateSystemModelsBundle;
    updateSystemModelsBundle1?: shared.UpdateSystemModelsBundle;
    updateSystemModelsBundle2?: shared.UpdateSystemModelsBundle;
}
export declare class BundlesPostBundleRequest extends SpeakeasyBase {
    request: BundlesPostBundleRequests;
}
export declare class BundlesPostBundleResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    bundlesPostBundle200ApplicationJsonString?: string;
    bundlesPostBundle200ApplicationXmlString?: string;
    bundlesPostBundle200TextJsonString?: string;
    bundlesPostBundle200TextXmlString?: string;
    contentType: string;
    statusCode: number;
}
