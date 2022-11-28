import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostTagMfaDeviceActionEnum {
    TagMfaDevice = "TagMFADevice"
}
export declare enum PostTagMfaDeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostTagMfaDeviceQueryParams extends SpeakeasyBase {
    action: PostTagMfaDeviceActionEnum;
    version: PostTagMfaDeviceVersionEnum;
}
export declare class PostTagMfaDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostTagMfaDeviceRequest extends SpeakeasyBase {
    queryParams: PostTagMfaDeviceQueryParams;
    headers: PostTagMfaDeviceHeaders;
    request?: Uint8Array;
}
export declare class PostTagMfaDeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
