import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateAssessmentTargetXAmzTargetEnum {
    InspectorServiceUpdateAssessmentTarget = "InspectorService.UpdateAssessmentTarget"
}
export declare class UpdateAssessmentTargetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAssessmentTargetXAmzTargetEnum;
}
export declare class UpdateAssessmentTargetRequest extends SpeakeasyBase {
    headers: UpdateAssessmentTargetHeaders;
    request: shared.UpdateAssessmentTargetRequest;
}
export declare class UpdateAssessmentTargetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    noSuchEntityException?: any;
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
}
