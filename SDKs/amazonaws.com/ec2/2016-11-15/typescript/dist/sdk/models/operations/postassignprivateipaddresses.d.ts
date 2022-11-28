import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAssignPrivateIpAddressesActionEnum {
    AssignPrivateIpAddresses = "AssignPrivateIpAddresses"
}
export declare enum PostAssignPrivateIpAddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAssignPrivateIpAddressesQueryParams extends SpeakeasyBase {
    action: PostAssignPrivateIpAddressesActionEnum;
    version: PostAssignPrivateIpAddressesVersionEnum;
}
export declare class PostAssignPrivateIpAddressesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAssignPrivateIpAddressesRequest extends SpeakeasyBase {
    queryParams: PostAssignPrivateIpAddressesQueryParams;
    headers: PostAssignPrivateIpAddressesHeaders;
    request?: Uint8Array;
}
export declare class PostAssignPrivateIpAddressesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
