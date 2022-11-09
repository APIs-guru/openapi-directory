import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostSetIpAddressTypeActionEnum {
    SetIpAddressType = "SetIpAddressType"
}
export declare enum PostSetIpAddressTypeVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostSetIpAddressTypeQueryParams extends SpeakeasyBase {
    action: PostSetIpAddressTypeActionEnum;
    version: PostSetIpAddressTypeVersionEnum;
}
export declare class PostSetIpAddressTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetIpAddressTypeRequest extends SpeakeasyBase {
    queryParams: PostSetIpAddressTypeQueryParams;
    headers: PostSetIpAddressTypeHeaders;
    request?: Uint8Array;
}
export declare class PostSetIpAddressTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
