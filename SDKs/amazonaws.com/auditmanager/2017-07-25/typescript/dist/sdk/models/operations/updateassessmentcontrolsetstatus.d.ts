import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateAssessmentControlSetStatusPathParams extends SpeakeasyBase {
    assessmentId: string;
    controlSetId: string;
}
export declare class UpdateAssessmentControlSetStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateAssessmentControlSetStatusRequestBodyStatusEnum {
    Active = "ACTIVE",
    UnderReview = "UNDER_REVIEW",
    Reviewed = "REVIEWED"
}
export declare class UpdateAssessmentControlSetStatusRequestBody extends SpeakeasyBase {
    comment: string;
    status: UpdateAssessmentControlSetStatusRequestBodyStatusEnum;
}
export declare class UpdateAssessmentControlSetStatusRequest extends SpeakeasyBase {
    pathParams: UpdateAssessmentControlSetStatusPathParams;
    headers: UpdateAssessmentControlSetStatusHeaders;
    request: UpdateAssessmentControlSetStatusRequestBody;
}
export declare class UpdateAssessmentControlSetStatusResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateAssessmentControlSetStatusResponse?: shared.UpdateAssessmentControlSetStatusResponse;
    validationException?: any;
}
