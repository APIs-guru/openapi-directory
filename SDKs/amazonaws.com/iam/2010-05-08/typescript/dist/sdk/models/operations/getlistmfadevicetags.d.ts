import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListMfaDeviceTagsActionEnum {
    ListMfaDeviceTags = "ListMFADeviceTags"
}
export declare enum GetListMfaDeviceTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GetListMfaDeviceTagsQueryParams extends SpeakeasyBase {
    action: GetListMfaDeviceTagsActionEnum;
    marker?: string;
    maxItems?: number;
    serialNumber: string;
    version: GetListMfaDeviceTagsVersionEnum;
}
export declare class GetListMfaDeviceTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListMfaDeviceTagsRequest extends SpeakeasyBase {
    queryParams: GetListMfaDeviceTagsQueryParams;
    headers: GetListMfaDeviceTagsHeaders;
}
export declare class GetListMfaDeviceTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
