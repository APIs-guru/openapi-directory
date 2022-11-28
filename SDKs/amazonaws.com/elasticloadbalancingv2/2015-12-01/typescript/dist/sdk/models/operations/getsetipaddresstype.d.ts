import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSetIpAddressTypeActionEnum {
    SetIpAddressType = "SetIpAddressType"
}
export declare enum GetSetIpAddressTypeIpAddressTypeEnum {
    Ipv4 = "ipv4",
    Dualstack = "dualstack"
}
export declare enum GetSetIpAddressTypeVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GetSetIpAddressTypeQueryParams extends SpeakeasyBase {
    action: GetSetIpAddressTypeActionEnum;
    ipAddressType: GetSetIpAddressTypeIpAddressTypeEnum;
    loadBalancerArn: string;
    version: GetSetIpAddressTypeVersionEnum;
}
export declare class GetSetIpAddressTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSetIpAddressTypeRequest extends SpeakeasyBase {
    queryParams: GetSetIpAddressTypeQueryParams;
    headers: GetSetIpAddressTypeHeaders;
}
export declare class GetSetIpAddressTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
