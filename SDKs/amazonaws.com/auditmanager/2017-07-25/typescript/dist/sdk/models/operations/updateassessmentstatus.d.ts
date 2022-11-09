import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateAssessmentStatusPathParams extends SpeakeasyBase {
    assessmentId: string;
}
export declare class UpdateAssessmentStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateAssessmentStatusRequestBodyStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
export declare class UpdateAssessmentStatusRequestBody extends SpeakeasyBase {
    status: UpdateAssessmentStatusRequestBodyStatusEnum;
}
export declare class UpdateAssessmentStatusRequest extends SpeakeasyBase {
    pathParams: UpdateAssessmentStatusPathParams;
    headers: UpdateAssessmentStatusHeaders;
    request: UpdateAssessmentStatusRequestBody;
}
export declare class UpdateAssessmentStatusResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateAssessmentStatusResponse?: shared.UpdateAssessmentStatusResponse;
    validationException?: any;
}
