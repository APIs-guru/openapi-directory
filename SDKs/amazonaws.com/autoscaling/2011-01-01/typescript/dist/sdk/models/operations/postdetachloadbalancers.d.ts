import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDetachLoadBalancersActionEnum {
    DetachLoadBalancers = "DetachLoadBalancers"
}
export declare enum PostDetachLoadBalancersVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDetachLoadBalancersQueryParams extends SpeakeasyBase {
    action: PostDetachLoadBalancersActionEnum;
    version: PostDetachLoadBalancersVersionEnum;
}
export declare class PostDetachLoadBalancersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDetachLoadBalancersRequest extends SpeakeasyBase {
    queryParams: PostDetachLoadBalancersQueryParams;
    headers: PostDetachLoadBalancersHeaders;
    request?: Uint8Array;
}
export declare class PostDetachLoadBalancersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
