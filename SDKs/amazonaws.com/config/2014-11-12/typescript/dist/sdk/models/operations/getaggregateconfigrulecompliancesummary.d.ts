import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAggregateConfigRuleComplianceSummaryQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum GetAggregateConfigRuleComplianceSummaryXAmzTargetEnum {
    StarlingDoveServiceGetAggregateConfigRuleComplianceSummary = "StarlingDoveService.GetAggregateConfigRuleComplianceSummary"
}
export declare class GetAggregateConfigRuleComplianceSummaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAggregateConfigRuleComplianceSummaryXAmzTargetEnum;
}
export declare class GetAggregateConfigRuleComplianceSummaryRequest extends SpeakeasyBase {
    queryParams: GetAggregateConfigRuleComplianceSummaryQueryParams;
    headers: GetAggregateConfigRuleComplianceSummaryHeaders;
    request: shared.GetAggregateConfigRuleComplianceSummaryRequest;
}
export declare class GetAggregateConfigRuleComplianceSummaryResponse extends SpeakeasyBase {
    contentType: string;
    getAggregateConfigRuleComplianceSummaryResponse?: shared.GetAggregateConfigRuleComplianceSummaryResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    noSuchConfigurationAggregatorException?: any;
    statusCode: number;
    validationException?: any;
}
