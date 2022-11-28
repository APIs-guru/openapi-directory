import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDetachLoadBalancerFromSubnetsActionEnum {
    DetachLoadBalancerFromSubnets = "DetachLoadBalancerFromSubnets"
}
export declare enum GetDetachLoadBalancerFromSubnetsVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GetDetachLoadBalancerFromSubnetsQueryParams extends SpeakeasyBase {
    action: GetDetachLoadBalancerFromSubnetsActionEnum;
    loadBalancerName: string;
    subnets: string[];
    version: GetDetachLoadBalancerFromSubnetsVersionEnum;
}
export declare class GetDetachLoadBalancerFromSubnetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDetachLoadBalancerFromSubnetsRequest extends SpeakeasyBase {
    queryParams: GetDetachLoadBalancerFromSubnetsQueryParams;
    headers: GetDetachLoadBalancerFromSubnetsHeaders;
}
export declare class GetDetachLoadBalancerFromSubnetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
