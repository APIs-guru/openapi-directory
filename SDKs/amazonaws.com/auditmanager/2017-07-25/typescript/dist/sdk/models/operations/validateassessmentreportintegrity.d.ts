import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ValidateAssessmentReportIntegrityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ValidateAssessmentReportIntegrityRequestBody extends SpeakeasyBase {
    s3RelativePath: string;
}
export declare class ValidateAssessmentReportIntegrityRequest extends SpeakeasyBase {
    headers: ValidateAssessmentReportIntegrityHeaders;
    request: ValidateAssessmentReportIntegrityRequestBody;
}
export declare class ValidateAssessmentReportIntegrityResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validateAssessmentReportIntegrityResponse?: shared.ValidateAssessmentReportIntegrityResponse;
    validationException?: any;
}
