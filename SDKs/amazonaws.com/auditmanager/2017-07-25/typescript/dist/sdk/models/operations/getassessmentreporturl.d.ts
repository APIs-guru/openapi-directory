import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAssessmentReportUrlPathParams extends SpeakeasyBase {
    assessmentId: string;
    assessmentReportId: string;
}
export declare class GetAssessmentReportUrlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssessmentReportUrlRequest extends SpeakeasyBase {
    pathParams: GetAssessmentReportUrlPathParams;
    headers: GetAssessmentReportUrlHeaders;
}
export declare class GetAssessmentReportUrlResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getAssessmentReportUrlResponse?: shared.GetAssessmentReportUrlResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
