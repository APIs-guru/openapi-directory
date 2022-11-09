import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostEnableMfaDeviceActionEnum {
    EnableMfaDevice = "EnableMFADevice"
}
export declare enum PostEnableMfaDeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostEnableMfaDeviceQueryParams extends SpeakeasyBase {
    action: PostEnableMfaDeviceActionEnum;
    version: PostEnableMfaDeviceVersionEnum;
}
export declare class PostEnableMfaDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostEnableMfaDeviceRequest extends SpeakeasyBase {
    queryParams: PostEnableMfaDeviceQueryParams;
    headers: PostEnableMfaDeviceHeaders;
    request?: Uint8Array;
}
export declare class PostEnableMfaDeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
