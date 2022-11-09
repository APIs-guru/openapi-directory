import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeRulesActionEnum {
    DescribeRules = "DescribeRules"
}
export declare enum PostDescribeRulesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class PostDescribeRulesQueryParams extends SpeakeasyBase {
    action: PostDescribeRulesActionEnum;
    version: PostDescribeRulesVersionEnum;
}
export declare class PostDescribeRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeRulesRequest extends SpeakeasyBase {
    queryParams: PostDescribeRulesQueryParams;
    headers: PostDescribeRulesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
