import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetUnassignPrivateIpAddressesActionEnum {
    UnassignPrivateIpAddresses = "UnassignPrivateIpAddresses"
}
export declare enum GetUnassignPrivateIpAddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetUnassignPrivateIpAddressesQueryParams extends SpeakeasyBase {
    action: GetUnassignPrivateIpAddressesActionEnum;
    ipv4Prefix?: string[];
    networkInterfaceId: string;
    privateIpAddress?: string[];
    version: GetUnassignPrivateIpAddressesVersionEnum;
}
export declare class GetUnassignPrivateIpAddressesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUnassignPrivateIpAddressesRequest extends SpeakeasyBase {
    queryParams: GetUnassignPrivateIpAddressesQueryParams;
    headers: GetUnassignPrivateIpAddressesHeaders;
}
export declare class GetUnassignPrivateIpAddressesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
