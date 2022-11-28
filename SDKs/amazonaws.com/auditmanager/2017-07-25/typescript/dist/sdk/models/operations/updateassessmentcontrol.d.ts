import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAssessmentControlPathParams extends SpeakeasyBase {
    assessmentId: string;
    controlId: string;
    controlSetId: string;
}
export declare class UpdateAssessmentControlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateAssessmentControlRequestBodyControlStatusEnum {
    UnderReview = "UNDER_REVIEW",
    Reviewed = "REVIEWED",
    Inactive = "INACTIVE"
}
export declare class UpdateAssessmentControlRequestBody extends SpeakeasyBase {
    commentBody?: string;
    controlStatus?: UpdateAssessmentControlRequestBodyControlStatusEnum;
}
export declare class UpdateAssessmentControlRequest extends SpeakeasyBase {
    pathParams: UpdateAssessmentControlPathParams;
    headers: UpdateAssessmentControlHeaders;
    request: UpdateAssessmentControlRequestBody;
}
export declare class UpdateAssessmentControlResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateAssessmentControlResponse?: shared.UpdateAssessmentControlResponse;
    validationException?: any;
}
