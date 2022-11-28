import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReleasePostReleaseBundlePathParams extends SpeakeasyBase {
    bundleId: string;
    releaseId: number;
}
export declare class ReleasePostReleaseBundleRequest extends SpeakeasyBase {
    pathParams: ReleasePostReleaseBundlePathParams;
}
export declare class ReleasePostReleaseBundleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
