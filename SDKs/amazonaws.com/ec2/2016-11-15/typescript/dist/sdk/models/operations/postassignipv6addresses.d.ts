import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAssignIpv6AddressesActionEnum {
    AssignIpv6Addresses = "AssignIpv6Addresses"
}
export declare enum PostAssignIpv6AddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAssignIpv6AddressesQueryParams extends SpeakeasyBase {
    action: PostAssignIpv6AddressesActionEnum;
    version: PostAssignIpv6AddressesVersionEnum;
}
export declare class PostAssignIpv6AddressesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAssignIpv6AddressesRequest extends SpeakeasyBase {
    queryParams: PostAssignIpv6AddressesQueryParams;
    headers: PostAssignIpv6AddressesHeaders;
    request?: Uint8Array;
}
export declare class PostAssignIpv6AddressesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
