import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAttachLoadBalancerToSubnetsActionEnum {
    AttachLoadBalancerToSubnets = "AttachLoadBalancerToSubnets"
}
export declare enum GetAttachLoadBalancerToSubnetsVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GetAttachLoadBalancerToSubnetsQueryParams extends SpeakeasyBase {
    action: GetAttachLoadBalancerToSubnetsActionEnum;
    loadBalancerName: string;
    subnets: string[];
    version: GetAttachLoadBalancerToSubnetsVersionEnum;
}
export declare class GetAttachLoadBalancerToSubnetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAttachLoadBalancerToSubnetsRequest extends SpeakeasyBase {
    queryParams: GetAttachLoadBalancerToSubnetsQueryParams;
    headers: GetAttachLoadBalancerToSubnetsHeaders;
}
export declare class GetAttachLoadBalancerToSubnetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
