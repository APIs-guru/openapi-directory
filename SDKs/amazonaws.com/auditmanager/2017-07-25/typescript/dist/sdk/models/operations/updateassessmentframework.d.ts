import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateAssessmentFrameworkPathParams extends SpeakeasyBase {
    frameworkId: string;
}
export declare class UpdateAssessmentFrameworkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateAssessmentFrameworkRequestBody extends SpeakeasyBase {
    complianceType?: string;
    controlSets: shared.UpdateAssessmentFrameworkControlSet[];
    description?: string;
    name: string;
}
export declare class UpdateAssessmentFrameworkRequest extends SpeakeasyBase {
    pathParams: UpdateAssessmentFrameworkPathParams;
    headers: UpdateAssessmentFrameworkHeaders;
    request: UpdateAssessmentFrameworkRequestBody;
}
export declare class UpdateAssessmentFrameworkResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateAssessmentFrameworkResponse?: shared.UpdateAssessmentFrameworkResponse;
    validationException?: any;
}
