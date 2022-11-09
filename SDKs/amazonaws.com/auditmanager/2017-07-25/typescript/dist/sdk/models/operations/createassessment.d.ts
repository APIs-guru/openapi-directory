import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateAssessmentHeaders extends SpeakeasyBase {
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
export declare class CreateAssessmentRequestBodyAssessmentReportsDestination extends SpeakeasyBase {
    destination?: string;
    destinationType?: shared.AssessmentReportDestinationTypeEnum;
}
/**
 *  The wrapper that contains the accounts and services in scope for the assessment.
**/
export declare class CreateAssessmentRequestBodyScope extends SpeakeasyBase {
    awsAccounts?: shared.AwsAccount[];
    awsServices?: shared.AwsService[];
}
export declare class CreateAssessmentRequestBody extends SpeakeasyBase {
    assessmentReportsDestination: CreateAssessmentRequestBodyAssessmentReportsDestination;
    description?: string;
    frameworkId: string;
    name: string;
    roles: shared.Role[];
    scope: CreateAssessmentRequestBodyScope;
    tags?: Map<string, string>;
}
export declare class CreateAssessmentRequest extends SpeakeasyBase {
    headers: CreateAssessmentHeaders;
    request: CreateAssessmentRequestBody;
}
export declare class CreateAssessmentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createAssessmentResponse?: shared.CreateAssessmentResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
