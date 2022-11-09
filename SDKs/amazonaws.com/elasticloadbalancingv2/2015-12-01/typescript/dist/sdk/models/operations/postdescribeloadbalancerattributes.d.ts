import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeLoadBalancerAttributesActionEnum {
    DescribeLoadBalancerAttributes = "DescribeLoadBalancerAttributes"
}
export declare enum PostDescribeLoadBalancerAttributesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostDescribeLoadBalancerAttributesQueryParams extends SpeakeasyBase {
    action: PostDescribeLoadBalancerAttributesActionEnum;
    version: PostDescribeLoadBalancerAttributesVersionEnum;
}
export declare class PostDescribeLoadBalancerAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeLoadBalancerAttributesRequest extends SpeakeasyBase {
    queryParams: PostDescribeLoadBalancerAttributesQueryParams;
    headers: PostDescribeLoadBalancerAttributesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeLoadBalancerAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
