import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteAssessmentFrameworkPathParams extends SpeakeasyBase {
    frameworkId: string;
}
export declare class DeleteAssessmentFrameworkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAssessmentFrameworkRequest extends SpeakeasyBase {
    pathParams: DeleteAssessmentFrameworkPathParams;
    headers: DeleteAssessmentFrameworkHeaders;
}
export declare class DeleteAssessmentFrameworkResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteAssessmentFrameworkResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
