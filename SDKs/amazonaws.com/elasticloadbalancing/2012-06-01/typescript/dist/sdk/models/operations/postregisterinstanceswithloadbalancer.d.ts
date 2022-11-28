import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRegisterInstancesWithLoadBalancerActionEnum {
    RegisterInstancesWithLoadBalancer = "RegisterInstancesWithLoadBalancer"
}
export declare enum PostRegisterInstancesWithLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class PostRegisterInstancesWithLoadBalancerQueryParams extends SpeakeasyBase {
    action: PostRegisterInstancesWithLoadBalancerActionEnum;
    version: PostRegisterInstancesWithLoadBalancerVersionEnum;
}
export declare class PostRegisterInstancesWithLoadBalancerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRegisterInstancesWithLoadBalancerRequest extends SpeakeasyBase {
    queryParams: PostRegisterInstancesWithLoadBalancerQueryParams;
    headers: PostRegisterInstancesWithLoadBalancerHeaders;
    request?: Uint8Array;
}
export declare class PostRegisterInstancesWithLoadBalancerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
