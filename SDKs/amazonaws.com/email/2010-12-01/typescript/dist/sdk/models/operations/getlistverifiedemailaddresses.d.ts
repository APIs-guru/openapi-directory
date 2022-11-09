import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListVerifiedEmailAddressesActionEnum {
    ListVerifiedEmailAddresses = "ListVerifiedEmailAddresses"
}
export declare enum GetListVerifiedEmailAddressesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GetListVerifiedEmailAddressesQueryParams extends SpeakeasyBase {
    action: GetListVerifiedEmailAddressesActionEnum;
    version: GetListVerifiedEmailAddressesVersionEnum;
}
export declare class GetListVerifiedEmailAddressesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListVerifiedEmailAddressesRequest extends SpeakeasyBase {
    queryParams: GetListVerifiedEmailAddressesQueryParams;
    headers: GetListVerifiedEmailAddressesHeaders;
}
export declare class GetListVerifiedEmailAddressesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
