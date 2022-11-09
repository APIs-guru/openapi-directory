import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAssessmentFrameworkPathParams extends SpeakeasyBase {
    frameworkId: string;
}
export declare class GetAssessmentFrameworkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssessmentFrameworkRequest extends SpeakeasyBase {
    pathParams: GetAssessmentFrameworkPathParams;
    headers: GetAssessmentFrameworkHeaders;
}
export declare class GetAssessmentFrameworkResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getAssessmentFrameworkResponse?: shared.GetAssessmentFrameworkResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
