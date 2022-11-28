import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteLoadBalancerActionEnum {
    DeleteLoadBalancer = "DeleteLoadBalancer"
}
export declare enum GetDeleteLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GetDeleteLoadBalancerQueryParams extends SpeakeasyBase {
    action: GetDeleteLoadBalancerActionEnum;
    loadBalancerName: string;
    version: GetDeleteLoadBalancerVersionEnum;
}
export declare class GetDeleteLoadBalancerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteLoadBalancerRequest extends SpeakeasyBase {
    queryParams: GetDeleteLoadBalancerQueryParams;
    headers: GetDeleteLoadBalancerHeaders;
}
export declare class GetDeleteLoadBalancerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
