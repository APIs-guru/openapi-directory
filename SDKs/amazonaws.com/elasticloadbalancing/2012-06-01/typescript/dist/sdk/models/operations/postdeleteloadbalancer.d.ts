import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteLoadBalancerActionEnum {
    DeleteLoadBalancer = "DeleteLoadBalancer"
}
export declare enum PostDeleteLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostDeleteLoadBalancerQueryParams extends SpeakeasyBase {
    action: PostDeleteLoadBalancerActionEnum;
    version: PostDeleteLoadBalancerVersionEnum;
}
export declare class PostDeleteLoadBalancerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteLoadBalancerRequest extends SpeakeasyBase {
    queryParams: PostDeleteLoadBalancerQueryParams;
    headers: PostDeleteLoadBalancerHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteLoadBalancerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
