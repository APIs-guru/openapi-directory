import { SpeakeasyBase } from "../../../internal/utils";
export declare class BundlesDeleteBundlePathParams extends SpeakeasyBase {
    id: string;
}
export declare class BundlesDeleteBundleRequest extends SpeakeasyBase {
    pathParams: BundlesDeleteBundlePathParams;
}
export declare class BundlesDeleteBundleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
