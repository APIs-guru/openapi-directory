import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAssessmentTemplateXAmzTargetEnum {
    InspectorServiceDeleteAssessmentTemplate = "InspectorService.DeleteAssessmentTemplate"
}
export declare class DeleteAssessmentTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAssessmentTemplateXAmzTargetEnum;
}
export declare class DeleteAssessmentTemplateRequest extends SpeakeasyBase {
    headers: DeleteAssessmentTemplateHeaders;
    request: shared.DeleteAssessmentTemplateRequest;
}
export declare class DeleteAssessmentTemplateResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    assessmentRunInProgressException?: any;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    noSuchEntityException?: any;
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
}
