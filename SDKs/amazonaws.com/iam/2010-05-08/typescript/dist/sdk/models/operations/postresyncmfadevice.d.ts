import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostResyncMfaDeviceActionEnum {
    ResyncMfaDevice = "ResyncMFADevice"
}
export declare enum PostResyncMfaDeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostResyncMfaDeviceQueryParams extends SpeakeasyBase {
    action: PostResyncMfaDeviceActionEnum;
    version: PostResyncMfaDeviceVersionEnum;
}
export declare class PostResyncMfaDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostResyncMfaDeviceRequest extends SpeakeasyBase {
    queryParams: PostResyncMfaDeviceQueryParams;
    headers: PostResyncMfaDeviceHeaders;
    request?: Uint8Array;
}
export declare class PostResyncMfaDeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
