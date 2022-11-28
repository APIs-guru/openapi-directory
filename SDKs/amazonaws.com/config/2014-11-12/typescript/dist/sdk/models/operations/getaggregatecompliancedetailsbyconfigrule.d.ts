import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAggregateComplianceDetailsByConfigRuleQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum GetAggregateComplianceDetailsByConfigRuleXAmzTargetEnum {
    StarlingDoveServiceGetAggregateComplianceDetailsByConfigRule = "StarlingDoveService.GetAggregateComplianceDetailsByConfigRule"
}
export declare class GetAggregateComplianceDetailsByConfigRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAggregateComplianceDetailsByConfigRuleXAmzTargetEnum;
}
export declare class GetAggregateComplianceDetailsByConfigRuleRequest extends SpeakeasyBase {
    queryParams: GetAggregateComplianceDetailsByConfigRuleQueryParams;
    headers: GetAggregateComplianceDetailsByConfigRuleHeaders;
    request: shared.GetAggregateComplianceDetailsByConfigRuleRequest;
}
export declare class GetAggregateComplianceDetailsByConfigRuleResponse extends SpeakeasyBase {
    contentType: string;
    getAggregateComplianceDetailsByConfigRuleResponse?: shared.GetAggregateComplianceDetailsByConfigRuleResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    noSuchConfigurationAggregatorException?: any;
    statusCode: number;
    validationException?: any;
}
