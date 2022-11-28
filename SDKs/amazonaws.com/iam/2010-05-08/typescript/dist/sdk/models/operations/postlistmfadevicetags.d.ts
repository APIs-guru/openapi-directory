import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListMfaDeviceTagsActionEnum {
    ListMfaDeviceTags = "ListMFADeviceTags"
}
export declare enum PostListMfaDeviceTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListMfaDeviceTagsQueryParams extends SpeakeasyBase {
    action: PostListMfaDeviceTagsActionEnum;
    version: PostListMfaDeviceTagsVersionEnum;
}
export declare class PostListMfaDeviceTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListMfaDeviceTagsRequest extends SpeakeasyBase {
    queryParams: PostListMfaDeviceTagsQueryParams;
    headers: PostListMfaDeviceTagsHeaders;
    request?: Uint8Array;
}
export declare class PostListMfaDeviceTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
