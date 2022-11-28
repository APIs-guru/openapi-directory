import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetComplianceSummaryByResourceTypeXAmzTargetEnum {
    StarlingDoveServiceGetComplianceSummaryByResourceType = "StarlingDoveService.GetComplianceSummaryByResourceType"
}
export declare class GetComplianceSummaryByResourceTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetComplianceSummaryByResourceTypeXAmzTargetEnum;
}
export declare class GetComplianceSummaryByResourceTypeRequest extends SpeakeasyBase {
    headers: GetComplianceSummaryByResourceTypeHeaders;
    request: shared.GetComplianceSummaryByResourceTypeRequest;
}
export declare class GetComplianceSummaryByResourceTypeResponse extends SpeakeasyBase {
    contentType: string;
    getComplianceSummaryByResourceTypeResponse?: shared.GetComplianceSummaryByResourceTypeResponse;
    invalidParameterValueException?: any;
    statusCode: number;
}
