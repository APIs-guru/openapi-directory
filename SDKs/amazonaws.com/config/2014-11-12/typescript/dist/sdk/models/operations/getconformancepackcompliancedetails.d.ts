import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConformancePackComplianceDetailsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum GetConformancePackComplianceDetailsXAmzTargetEnum {
    StarlingDoveServiceGetConformancePackComplianceDetails = "StarlingDoveService.GetConformancePackComplianceDetails"
}
export declare class GetConformancePackComplianceDetailsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetConformancePackComplianceDetailsXAmzTargetEnum;
}
export declare class GetConformancePackComplianceDetailsRequest extends SpeakeasyBase {
    queryParams: GetConformancePackComplianceDetailsQueryParams;
    headers: GetConformancePackComplianceDetailsHeaders;
    request: shared.GetConformancePackComplianceDetailsRequest;
}
export declare class GetConformancePackComplianceDetailsResponse extends SpeakeasyBase {
    contentType: string;
    getConformancePackComplianceDetailsResponse?: shared.GetConformancePackComplianceDetailsResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    invalidParameterValueException?: any;
    noSuchConfigRuleInConformancePackException?: any;
    noSuchConformancePackException?: any;
    statusCode: number;
}
