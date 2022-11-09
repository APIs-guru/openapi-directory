import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetResyncMfaDeviceActionEnum {
    ResyncMfaDevice = "ResyncMFADevice"
}
export declare enum GetResyncMfaDeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetResyncMfaDeviceQueryParams extends SpeakeasyBase {
    action: GetResyncMfaDeviceActionEnum;
    authenticationCode1: string;
    authenticationCode2: string;
    serialNumber: string;
    userName: string;
    version: GetResyncMfaDeviceVersionEnum;
}
export declare class GetResyncMfaDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResyncMfaDeviceRequest extends SpeakeasyBase {
    queryParams: GetResyncMfaDeviceQueryParams;
    headers: GetResyncMfaDeviceHeaders;
}
export declare class GetResyncMfaDeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
