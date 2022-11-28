import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateVirtualMfaDeviceActionEnum {
    CreateVirtualMfaDevice = "CreateVirtualMFADevice"
}
export declare enum PostCreateVirtualMfaDeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostCreateVirtualMfaDeviceQueryParams extends SpeakeasyBase {
    action: PostCreateVirtualMfaDeviceActionEnum;
    version: PostCreateVirtualMfaDeviceVersionEnum;
}
export declare class PostCreateVirtualMfaDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateVirtualMfaDeviceRequest extends SpeakeasyBase {
    queryParams: PostCreateVirtualMfaDeviceQueryParams;
    headers: PostCreateVirtualMfaDeviceHeaders;
    request?: Uint8Array;
}
export declare class PostCreateVirtualMfaDeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
