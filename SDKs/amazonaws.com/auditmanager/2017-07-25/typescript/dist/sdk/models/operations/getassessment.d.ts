import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAssessmentPathParams extends SpeakeasyBase {
    assessmentId: string;
}
export declare class GetAssessmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssessmentRequest extends SpeakeasyBase {
    pathParams: GetAssessmentPathParams;
    headers: GetAssessmentHeaders;
}
export declare class GetAssessmentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getAssessmentResponse?: shared.GetAssessmentResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
