import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteVirtualMfaDeviceActionEnum {
    DeleteVirtualMfaDevice = "DeleteVirtualMFADevice"
}
export declare enum GetDeleteVirtualMfaDeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeleteVirtualMfaDeviceQueryParams extends SpeakeasyBase {
    action: GetDeleteVirtualMfaDeviceActionEnum;
    serialNumber: string;
    version: GetDeleteVirtualMfaDeviceVersionEnum;
}
export declare class GetDeleteVirtualMfaDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteVirtualMfaDeviceRequest extends SpeakeasyBase {
    queryParams: GetDeleteVirtualMfaDeviceQueryParams;
    headers: GetDeleteVirtualMfaDeviceHeaders;
}
export declare class GetDeleteVirtualMfaDeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
