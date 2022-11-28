import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListMfaDevicesActionEnum {
    ListMfaDevices = "ListMFADevices"
}
export declare enum GetListMfaDevicesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListMfaDevicesQueryParams extends SpeakeasyBase {
    action: GetListMfaDevicesActionEnum;
    marker?: string;
    maxItems?: number;
    userName?: string;
    version: GetListMfaDevicesVersionEnum;
}
export declare class GetListMfaDevicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListMfaDevicesRequest extends SpeakeasyBase {
    queryParams: GetListMfaDevicesQueryParams;
    headers: GetListMfaDevicesHeaders;
}
export declare class GetListMfaDevicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
