import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteAssessmentPathParams extends SpeakeasyBase {
    assessmentId: string;
}
export declare class DeleteAssessmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAssessmentRequest extends SpeakeasyBase {
    pathParams: DeleteAssessmentPathParams;
    headers: DeleteAssessmentHeaders;
}
export declare class DeleteAssessmentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteAssessmentResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
