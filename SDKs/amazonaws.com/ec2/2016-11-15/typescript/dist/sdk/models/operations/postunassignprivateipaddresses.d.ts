import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUnassignPrivateIpAddressesActionEnum {
    UnassignPrivateIpAddresses = "UnassignPrivateIpAddresses"
}
export declare enum PostUnassignPrivateIpAddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostUnassignPrivateIpAddressesQueryParams extends SpeakeasyBase {
    action: PostUnassignPrivateIpAddressesActionEnum;
    version: PostUnassignPrivateIpAddressesVersionEnum;
}
export declare class PostUnassignPrivateIpAddressesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUnassignPrivateIpAddressesRequest extends SpeakeasyBase {
    queryParams: PostUnassignPrivateIpAddressesQueryParams;
    headers: PostUnassignPrivateIpAddressesHeaders;
    request?: Uint8Array;
}
export declare class PostUnassignPrivateIpAddressesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
