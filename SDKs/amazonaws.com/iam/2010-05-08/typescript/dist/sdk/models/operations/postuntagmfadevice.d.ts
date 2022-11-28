import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUntagMfaDeviceActionEnum {
    UntagMfaDevice = "UntagMFADevice"
}
export declare enum PostUntagMfaDeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUntagMfaDeviceQueryParams extends SpeakeasyBase {
    action: PostUntagMfaDeviceActionEnum;
    version: PostUntagMfaDeviceVersionEnum;
}
export declare class PostUntagMfaDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUntagMfaDeviceRequest extends SpeakeasyBase {
    queryParams: PostUntagMfaDeviceQueryParams;
    headers: PostUntagMfaDeviceHeaders;
    request?: Uint8Array;
}
export declare class PostUntagMfaDeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
