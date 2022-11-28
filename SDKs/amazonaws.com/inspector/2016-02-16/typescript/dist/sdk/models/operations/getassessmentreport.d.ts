import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAssessmentReportXAmzTargetEnum {
    InspectorServiceGetAssessmentReport = "InspectorService.GetAssessmentReport"
}
export declare class GetAssessmentReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAssessmentReportXAmzTargetEnum;
}
export declare class GetAssessmentReportRequest extends SpeakeasyBase {
    headers: GetAssessmentReportHeaders;
    request: shared.GetAssessmentReportRequest;
}
export declare class GetAssessmentReportResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    assessmentRunInProgressException?: any;
    contentType: string;
    getAssessmentReportResponse?: shared.GetAssessmentReportResponse;
    internalException?: any;
    invalidInputException?: any;
    noSuchEntityException?: any;
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
    unsupportedFeatureException?: any;
}
