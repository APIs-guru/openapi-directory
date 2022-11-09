import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeLoadBalancersActionEnum {
    DescribeLoadBalancers = "DescribeLoadBalancers"
}
export declare enum PostDescribeLoadBalancersVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostDescribeLoadBalancersQueryParams extends SpeakeasyBase {
    action: PostDescribeLoadBalancersActionEnum;
    version: PostDescribeLoadBalancersVersionEnum;
}
export declare class PostDescribeLoadBalancersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeLoadBalancersRequest extends SpeakeasyBase {
    queryParams: PostDescribeLoadBalancersQueryParams;
    headers: PostDescribeLoadBalancersHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeLoadBalancersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
