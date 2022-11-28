import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAssignIpv6AddressesActionEnum {
    AssignIpv6Addresses = "AssignIpv6Addresses"
}
export declare enum GetAssignIpv6AddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAssignIpv6AddressesQueryParams extends SpeakeasyBase {
    action: GetAssignIpv6AddressesActionEnum;
    ipv6AddressCount?: number;
    ipv6Addresses?: string[];
    ipv6Prefix?: string[];
    ipv6PrefixCount?: number;
    networkInterfaceId: string;
    version: GetAssignIpv6AddressesVersionEnum;
}
export declare class GetAssignIpv6AddressesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssignIpv6AddressesRequest extends SpeakeasyBase {
    queryParams: GetAssignIpv6AddressesQueryParams;
    headers: GetAssignIpv6AddressesHeaders;
}
export declare class GetAssignIpv6AddressesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
