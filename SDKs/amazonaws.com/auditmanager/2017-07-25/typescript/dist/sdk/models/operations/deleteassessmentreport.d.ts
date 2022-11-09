import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteAssessmentReportPathParams extends SpeakeasyBase {
    assessmentId: string;
    assessmentReportId: string;
}
export declare class DeleteAssessmentReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAssessmentReportRequest extends SpeakeasyBase {
    pathParams: DeleteAssessmentReportPathParams;
    headers: DeleteAssessmentReportHeaders;
}
export declare class DeleteAssessmentReportResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteAssessmentReportResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
