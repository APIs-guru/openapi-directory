import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListVirtualMfaDevicesActionEnum {
    ListVirtualMfaDevices = "ListVirtualMFADevices"
}
export declare enum PostListVirtualMfaDevicesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListVirtualMfaDevicesQueryParams extends SpeakeasyBase {
    action: PostListVirtualMfaDevicesActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListVirtualMfaDevicesVersionEnum;
}
export declare class PostListVirtualMfaDevicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListVirtualMfaDevicesRequest extends SpeakeasyBase {
    queryParams: PostListVirtualMfaDevicesQueryParams;
    headers: PostListVirtualMfaDevicesHeaders;
    request?: Uint8Array;
}
export declare class PostListVirtualMfaDevicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
