import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUnassignIpv6AddressesActionEnum {
    UnassignIpv6Addresses = "UnassignIpv6Addresses"
}
export declare enum PostUnassignIpv6AddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostUnassignIpv6AddressesQueryParams extends SpeakeasyBase {
    action: PostUnassignIpv6AddressesActionEnum;
    version: PostUnassignIpv6AddressesVersionEnum;
}
export declare class PostUnassignIpv6AddressesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUnassignIpv6AddressesRequest extends SpeakeasyBase {
    queryParams: PostUnassignIpv6AddressesQueryParams;
    headers: PostUnassignIpv6AddressesHeaders;
    request?: Uint8Array;
}
export declare class PostUnassignIpv6AddressesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
