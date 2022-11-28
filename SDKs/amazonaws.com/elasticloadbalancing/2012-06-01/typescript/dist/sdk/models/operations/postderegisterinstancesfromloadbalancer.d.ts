import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeregisterInstancesFromLoadBalancerActionEnum {
    DeregisterInstancesFromLoadBalancer = "DeregisterInstancesFromLoadBalancer"
}
export declare enum PostDeregisterInstancesFromLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostDeregisterInstancesFromLoadBalancerQueryParams extends SpeakeasyBase {
    action: PostDeregisterInstancesFromLoadBalancerActionEnum;
    version: PostDeregisterInstancesFromLoadBalancerVersionEnum;
}
export declare class PostDeregisterInstancesFromLoadBalancerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeregisterInstancesFromLoadBalancerRequest extends SpeakeasyBase {
    queryParams: PostDeregisterInstancesFromLoadBalancerQueryParams;
    headers: PostDeregisterInstancesFromLoadBalancerHeaders;
    request?: Uint8Array;
}
export declare class PostDeregisterInstancesFromLoadBalancerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
