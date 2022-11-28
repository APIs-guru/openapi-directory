import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUntagMfaDeviceActionEnum {
    UntagMfaDevice = "UntagMFADevice"
}
export declare enum GetUntagMfaDeviceVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetUntagMfaDeviceQueryParams extends SpeakeasyBase {
    action: GetUntagMfaDeviceActionEnum;
    serialNumber: string;
    tagKeys: string[];
    version: GetUntagMfaDeviceVersionEnum;
}
export declare class GetUntagMfaDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUntagMfaDeviceRequest extends SpeakeasyBase {
    queryParams: GetUntagMfaDeviceQueryParams;
    headers: GetUntagMfaDeviceHeaders;
}
export declare class GetUntagMfaDeviceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
