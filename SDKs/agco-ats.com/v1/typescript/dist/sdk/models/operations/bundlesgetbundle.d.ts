import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BundlesGetBundlePathParams extends SpeakeasyBase {
    id: string;
}
export declare class BundlesGetBundleRequest extends SpeakeasyBase {
    pathParams: BundlesGetBundlePathParams;
}
export declare class BundlesGetBundleResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateSystemModelsBundle?: shared.UpdateSystemModelsBundle;
}
