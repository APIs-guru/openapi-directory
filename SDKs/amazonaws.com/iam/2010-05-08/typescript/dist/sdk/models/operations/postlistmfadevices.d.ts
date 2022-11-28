import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListMfaDevicesActionEnum {
    ListMfaDevices = "ListMFADevices"
}
export declare enum PostListMfaDevicesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListMfaDevicesQueryParams extends SpeakeasyBase {
    action: PostListMfaDevicesActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListMfaDevicesVersionEnum;
}
export declare class PostListMfaDevicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListMfaDevicesRequest extends SpeakeasyBase {
    queryParams: PostListMfaDevicesQueryParams;
    headers: PostListMfaDevicesHeaders;
    request?: Uint8Array;
}
export declare class PostListMfaDevicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
