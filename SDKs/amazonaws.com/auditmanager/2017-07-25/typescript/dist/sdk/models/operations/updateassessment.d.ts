import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateAssessmentPathParams extends SpeakeasyBase {
    assessmentId: string;
}
export declare class UpdateAssessmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 *  The location in which Audit Manager saves assessment reports for the given assessment.
**/
export declare class UpdateAssessmentRequestBodyAssessmentReportsDestination extends SpeakeasyBase {
    destination?: string;
    destinationType?: shared.AssessmentReportDestinationTypeEnum;
}
/**
 *  The wrapper that contains the accounts and services in scope for the assessment.
**/
export declare class UpdateAssessmentRequestBodyScope extends SpeakeasyBase {
    awsAccounts?: shared.AwsAccount[];
    awsServices?: shared.AwsService[];
}
export declare class UpdateAssessmentRequestBody extends SpeakeasyBase {
    assessmentDescription?: string;
    assessmentName?: string;
    assessmentReportsDestination?: UpdateAssessmentRequestBodyAssessmentReportsDestination;
    roles?: shared.Role[];
    scope: UpdateAssessmentRequestBodyScope;
}
export declare class UpdateAssessmentRequest extends SpeakeasyBase {
    pathParams: UpdateAssessmentPathParams;
    headers: UpdateAssessmentHeaders;
    request: UpdateAssessmentRequestBody;
}
export declare class UpdateAssessmentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateAssessmentResponse?: shared.UpdateAssessmentResponse;
    validationException?: any;
}
