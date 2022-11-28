import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetEnableMfaDeviceActionEnum {
    EnableMfaDevice = "EnableMFADevice"
}
export declare enum GetEnableMfaDeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetEnableMfaDeviceQueryParams extends SpeakeasyBase {
    action: GetEnableMfaDeviceActionEnum;
    authenticationCode1: string;
    authenticationCode2: string;
    serialNumber: string;
    userName: string;
    version: GetEnableMfaDeviceVersionEnum;
}
export declare class GetEnableMfaDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEnableMfaDeviceRequest extends SpeakeasyBase {
    queryParams: GetEnableMfaDeviceQueryParams;
    headers: GetEnableMfaDeviceHeaders;
}
export declare class GetEnableMfaDeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
