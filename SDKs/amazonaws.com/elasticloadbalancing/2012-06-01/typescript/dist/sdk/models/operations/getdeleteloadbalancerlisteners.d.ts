import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteLoadBalancerListenersActionEnum {
    DeleteLoadBalancerListeners = "DeleteLoadBalancerListeners"
}
export declare enum GetDeleteLoadBalancerListenersVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GetDeleteLoadBalancerListenersQueryParams extends SpeakeasyBase {
    action: GetDeleteLoadBalancerListenersActionEnum;
    loadBalancerName: string;
    loadBalancerPorts: number[];
    version: GetDeleteLoadBalancerListenersVersionEnum;
}
export declare class GetDeleteLoadBalancerListenersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteLoadBalancerListenersRequest extends SpeakeasyBase {
    queryParams: GetDeleteLoadBalancerListenersQueryParams;
    headers: GetDeleteLoadBalancerListenersHeaders;
}
export declare class GetDeleteLoadBalancerListenersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
