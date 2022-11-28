import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeClientVpnAuthorizationRulesActionEnum {
    DescribeClientVpnAuthorizationRules = "DescribeClientVpnAuthorizationRules"
}
export declare enum PostDescribeClientVpnAuthorizationRulesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeClientVpnAuthorizationRulesQueryParams extends SpeakeasyBase {
    action: PostDescribeClientVpnAuthorizationRulesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeClientVpnAuthorizationRulesVersionEnum;
}
export declare class PostDescribeClientVpnAuthorizationRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeClientVpnAuthorizationRulesRequest extends SpeakeasyBase {
    queryParams: PostDescribeClientVpnAuthorizationRulesQueryParams;
    headers: PostDescribeClientVpnAuthorizationRulesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeClientVpnAuthorizationRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
