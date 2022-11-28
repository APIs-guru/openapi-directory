import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAssessmentTargetXAmzTargetEnum {
    InspectorServiceDeleteAssessmentTarget = "InspectorService.DeleteAssessmentTarget"
}
export declare class DeleteAssessmentTargetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAssessmentTargetXAmzTargetEnum;
}
export declare class DeleteAssessmentTargetRequest extends SpeakeasyBase {
    headers: DeleteAssessmentTargetHeaders;
    request: shared.DeleteAssessmentTargetRequest;
}
export declare class DeleteAssessmentTargetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    assessmentRunInProgressException?: any;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    noSuchEntityException?: any;
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
}
