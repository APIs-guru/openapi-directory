import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostBundleInstanceActionEnum {
    BundleInstance = "BundleInstance"
}
export declare enum PostBundleInstanceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostBundleInstanceQueryParams extends SpeakeasyBase {
    action: PostBundleInstanceActionEnum;
    version: PostBundleInstanceVersionEnum;
}
export declare class PostBundleInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostBundleInstanceRequest extends SpeakeasyBase {
    queryParams: PostBundleInstanceQueryParams;
    headers: PostBundleInstanceHeaders;
    request?: Uint8Array;
}
export declare class PostBundleInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
