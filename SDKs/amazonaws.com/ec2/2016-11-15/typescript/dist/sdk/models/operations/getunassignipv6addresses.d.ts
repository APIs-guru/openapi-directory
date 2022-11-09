import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUnassignIpv6AddressesActionEnum {
    UnassignIpv6Addresses = "UnassignIpv6Addresses"
}
export declare enum GetUnassignIpv6AddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetUnassignIpv6AddressesQueryParams extends SpeakeasyBase {
    action: GetUnassignIpv6AddressesActionEnum;
    ipv6Addresses?: string[];
    ipv6Prefix?: string[];
    networkInterfaceId: string;
    version: GetUnassignIpv6AddressesVersionEnum;
}
export declare class GetUnassignIpv6AddressesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUnassignIpv6AddressesRequest extends SpeakeasyBase {
    queryParams: GetUnassignIpv6AddressesQueryParams;
    headers: GetUnassignIpv6AddressesHeaders;
}
export declare class GetUnassignIpv6AddressesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
