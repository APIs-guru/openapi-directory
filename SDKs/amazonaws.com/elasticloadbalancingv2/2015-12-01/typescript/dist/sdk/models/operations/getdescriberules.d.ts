import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeRulesActionEnum {
    DescribeRules = "DescribeRules"
}
export declare enum GetDescribeRulesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GetDescribeRulesQueryParams extends SpeakeasyBase {
    action: GetDescribeRulesActionEnum;
    listenerArn?: string;
    marker?: string;
    pageSize?: number;
    ruleArns?: string[];
    version: GetDescribeRulesVersionEnum;
}
export declare class GetDescribeRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeRulesRequest extends SpeakeasyBase {
    queryParams: GetDescribeRulesQueryParams;
    headers: GetDescribeRulesHeaders;
}
export declare class GetDescribeRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
