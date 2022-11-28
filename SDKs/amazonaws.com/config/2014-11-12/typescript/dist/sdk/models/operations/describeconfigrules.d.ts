import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeConfigRulesQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum DescribeConfigRulesXAmzTargetEnum {
    StarlingDoveServiceDescribeConfigRules = "StarlingDoveService.DescribeConfigRules"
}
export declare class DescribeConfigRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConfigRulesXAmzTargetEnum;
}
export declare class DescribeConfigRulesRequest extends SpeakeasyBase {
    queryParams: DescribeConfigRulesQueryParams;
    headers: DescribeConfigRulesHeaders;
    request: shared.DescribeConfigRulesRequest;
}
export declare class DescribeConfigRulesResponse extends SpeakeasyBase {
    contentType: string;
    describeConfigRulesResponse?: shared.DescribeConfigRulesResponse;
    invalidNextTokenException?: any;
    noSuchConfigRuleException?: any;
    statusCode: number;
}
