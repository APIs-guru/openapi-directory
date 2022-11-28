import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetApplySecurityGroupsToLoadBalancerActionEnum {
    ApplySecurityGroupsToLoadBalancer = "ApplySecurityGroupsToLoadBalancer"
}
export declare enum GetApplySecurityGroupsToLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GetApplySecurityGroupsToLoadBalancerQueryParams extends SpeakeasyBase {
    action: GetApplySecurityGroupsToLoadBalancerActionEnum;
    loadBalancerName: string;
    securityGroups: string[];
    version: GetApplySecurityGroupsToLoadBalancerVersionEnum;
}
export declare class GetApplySecurityGroupsToLoadBalancerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetApplySecurityGroupsToLoadBalancerRequest extends SpeakeasyBase {
    queryParams: GetApplySecurityGroupsToLoadBalancerQueryParams;
    headers: GetApplySecurityGroupsToLoadBalancerHeaders;
}
export declare class GetApplySecurityGroupsToLoadBalancerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
