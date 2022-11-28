import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAssessmentTargetXAmzTargetEnum {
    InspectorServiceCreateAssessmentTarget = "InspectorService.CreateAssessmentTarget"
}
export declare class CreateAssessmentTargetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAssessmentTargetXAmzTargetEnum;
}
export declare class CreateAssessmentTargetRequest extends SpeakeasyBase {
    headers: CreateAssessmentTargetHeaders;
    request: shared.CreateAssessmentTargetRequest;
}
export declare class CreateAssessmentTargetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createAssessmentTargetResponse?: shared.CreateAssessmentTargetResponse;
    internalException?: any;
    invalidCrossAccountRoleException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    noSuchEntityException?: any;
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
}
