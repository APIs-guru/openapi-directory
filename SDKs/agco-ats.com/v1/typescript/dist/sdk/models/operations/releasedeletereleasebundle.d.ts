import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReleaseDeleteReleaseBundlePathParams extends SpeakeasyBase {
    bundleId: string;
    releaseId: number;
}
export declare class ReleaseDeleteReleaseBundleRequest extends SpeakeasyBase {
    pathParams: ReleaseDeleteReleaseBundlePathParams;
}
export declare class ReleaseDeleteReleaseBundleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
