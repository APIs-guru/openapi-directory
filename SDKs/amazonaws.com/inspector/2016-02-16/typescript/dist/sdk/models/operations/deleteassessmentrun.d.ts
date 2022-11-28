import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAssessmentRunXAmzTargetEnum {
    InspectorServiceDeleteAssessmentRun = "InspectorService.DeleteAssessmentRun"
}
export declare class DeleteAssessmentRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAssessmentRunXAmzTargetEnum;
}
export declare class DeleteAssessmentRunRequest extends SpeakeasyBase {
    headers: DeleteAssessmentRunHeaders;
    request: shared.DeleteAssessmentRunRequest;
}
export declare class DeleteAssessmentRunResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    assessmentRunInProgressException?: any;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    noSuchEntityException?: any;
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
}
