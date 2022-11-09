import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeactivateMfaDeviceActionEnum {
    DeactivateMfaDevice = "DeactivateMFADevice"
}
export declare enum GetDeactivateMfaDeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetDeactivateMfaDeviceQueryParams extends SpeakeasyBase {
    action: GetDeactivateMfaDeviceActionEnum;
    serialNumber: string;
    userName: string;
    version: GetDeactivateMfaDeviceVersionEnum;
}
export declare class GetDeactivateMfaDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeactivateMfaDeviceRequest extends SpeakeasyBase {
    queryParams: GetDeactivateMfaDeviceQueryParams;
    headers: GetDeactivateMfaDeviceHeaders;
}
export declare class GetDeactivateMfaDeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
