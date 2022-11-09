import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteVirtualMfaDeviceActionEnum {
    DeleteVirtualMfaDevice = "DeleteVirtualMFADevice"
}
export declare enum PostDeleteVirtualMfaDeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeleteVirtualMfaDeviceQueryParams extends SpeakeasyBase {
    action: PostDeleteVirtualMfaDeviceActionEnum;
    version: PostDeleteVirtualMfaDeviceVersionEnum;
}
export declare class PostDeleteVirtualMfaDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteVirtualMfaDeviceRequest extends SpeakeasyBase {
    queryParams: PostDeleteVirtualMfaDeviceQueryParams;
    headers: PostDeleteVirtualMfaDeviceHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteVirtualMfaDeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
