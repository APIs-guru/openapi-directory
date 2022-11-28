import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeConfigRuleEvaluationStatusQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeConfigRuleEvaluationStatusXAmzTargetEnum {
    StarlingDoveServiceDescribeConfigRuleEvaluationStatus = "StarlingDoveService.DescribeConfigRuleEvaluationStatus"
}
export declare class DescribeConfigRuleEvaluationStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConfigRuleEvaluationStatusXAmzTargetEnum;
}
export declare class DescribeConfigRuleEvaluationStatusRequest extends SpeakeasyBase {
    queryParams: DescribeConfigRuleEvaluationStatusQueryParams;
    headers: DescribeConfigRuleEvaluationStatusHeaders;
    request: shared.DescribeConfigRuleEvaluationStatusRequest;
}
export declare class DescribeConfigRuleEvaluationStatusResponse extends SpeakeasyBase {
    contentType: string;
    describeConfigRuleEvaluationStatusResponse?: shared.DescribeConfigRuleEvaluationStatusResponse;
    invalidNextTokenException?: any;
    invalidParameterValueException?: any;
    noSuchConfigRuleException?: any;
    statusCode: number;
}
