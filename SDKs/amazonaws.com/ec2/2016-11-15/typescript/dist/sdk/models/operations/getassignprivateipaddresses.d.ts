import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAssignPrivateIpAddressesActionEnum {
    AssignPrivateIpAddresses = "AssignPrivateIpAddresses"
}
export declare enum GetAssignPrivateIpAddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAssignPrivateIpAddressesQueryParams extends SpeakeasyBase {
    action: GetAssignPrivateIpAddressesActionEnum;
    allowReassignment?: boolean;
    ipv4Prefix?: string[];
    ipv4PrefixCount?: number;
    networkInterfaceId: string;
    privateIpAddress?: string[];
    secondaryPrivateIpAddressCount?: number;
    version: GetAssignPrivateIpAddressesVersionEnum;
}
export declare class GetAssignPrivateIpAddressesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssignPrivateIpAddressesRequest extends SpeakeasyBase {
    queryParams: GetAssignPrivateIpAddressesQueryParams;
    headers: GetAssignPrivateIpAddressesHeaders;
}
export declare class GetAssignPrivateIpAddressesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
