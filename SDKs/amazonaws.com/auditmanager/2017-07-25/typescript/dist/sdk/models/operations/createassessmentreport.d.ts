import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateAssessmentReportPathParams extends SpeakeasyBase {
    assessmentId: string;
}
export declare class CreateAssessmentReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAssessmentReportRequestBody extends SpeakeasyBase {
    description?: string;
    name: string;
}
export declare class CreateAssessmentReportRequest extends SpeakeasyBase {
    pathParams: CreateAssessmentReportPathParams;
    headers: CreateAssessmentReportHeaders;
    request: CreateAssessmentReportRequestBody;
}
export declare class CreateAssessmentReportResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createAssessmentReportResponse?: shared.CreateAssessmentReportResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
