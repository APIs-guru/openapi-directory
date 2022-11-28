import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSetSecurityGroupsActionEnum {
    SetSecurityGroups = "SetSecurityGroups"
}
export declare enum GetSetSecurityGroupsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GetSetSecurityGroupsQueryParams extends SpeakeasyBase {
    action: GetSetSecurityGroupsActionEnum;
    loadBalancerArn: string;
    securityGroups: string[];
    version: GetSetSecurityGroupsVersionEnum;
}
export declare class GetSetSecurityGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSetSecurityGroupsRequest extends SpeakeasyBase {
    queryParams: GetSetSecurityGroupsQueryParams;
    headers: GetSetSecurityGroupsHeaders;
}
export declare class GetSetSecurityGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
