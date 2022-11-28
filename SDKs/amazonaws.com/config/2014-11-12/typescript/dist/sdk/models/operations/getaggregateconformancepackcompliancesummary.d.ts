import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAggregateConformancePackComplianceSummaryQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum GetAggregateConformancePackComplianceSummaryXAmzTargetEnum {
    StarlingDoveServiceGetAggregateConformancePackComplianceSummary = "StarlingDoveService.GetAggregateConformancePackComplianceSummary"
}
export declare class GetAggregateConformancePackComplianceSummaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAggregateConformancePackComplianceSummaryXAmzTargetEnum;
}
export declare class GetAggregateConformancePackComplianceSummaryRequest extends SpeakeasyBase {
    queryParams: GetAggregateConformancePackComplianceSummaryQueryParams;
    headers: GetAggregateConformancePackComplianceSummaryHeaders;
    request: shared.GetAggregateConformancePackComplianceSummaryRequest;
}
export declare class GetAggregateConformancePackComplianceSummaryResponse extends SpeakeasyBase {
    contentType: string;
    getAggregateConformancePackComplianceSummaryResponse?: shared.GetAggregateConformancePackComplianceSummaryResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    noSuchConfigurationAggregatorException?: any;
    statusCode: number;
    validationException?: any;
}
