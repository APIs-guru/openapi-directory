import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConformancePackComplianceSummaryQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum GetConformancePackComplianceSummaryXAmzTargetEnum {
    StarlingDoveServiceGetConformancePackComplianceSummary = "StarlingDoveService.GetConformancePackComplianceSummary"
}
export declare class GetConformancePackComplianceSummaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetConformancePackComplianceSummaryXAmzTargetEnum;
}
export declare class GetConformancePackComplianceSummaryRequest extends SpeakeasyBase {
    queryParams: GetConformancePackComplianceSummaryQueryParams;
    headers: GetConformancePackComplianceSummaryHeaders;
    request: shared.GetConformancePackComplianceSummaryRequest;
}
export declare class GetConformancePackComplianceSummaryResponse extends SpeakeasyBase {
    contentType: string;
    getConformancePackComplianceSummaryResponse?: shared.GetConformancePackComplianceSummaryResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    noSuchConformancePackException?: any;
    statusCode: number;
}
