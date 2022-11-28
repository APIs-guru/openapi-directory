import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeSecurityGroupRulesActionEnum {
    DescribeSecurityGroupRules = "DescribeSecurityGroupRules"
}
export declare enum PostDescribeSecurityGroupRulesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeSecurityGroupRulesQueryParams extends SpeakeasyBase {
    action: PostDescribeSecurityGroupRulesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeSecurityGroupRulesVersionEnum;
}
export declare class PostDescribeSecurityGroupRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeSecurityGroupRulesRequest extends SpeakeasyBase {
    queryParams: PostDescribeSecurityGroupRulesQueryParams;
    headers: PostDescribeSecurityGroupRulesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeSecurityGroupRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
