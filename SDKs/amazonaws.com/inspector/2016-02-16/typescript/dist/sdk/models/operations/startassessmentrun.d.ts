import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartAssessmentRunXAmzTargetEnum {
    InspectorServiceStartAssessmentRun = "InspectorService.StartAssessmentRun"
}
export declare class StartAssessmentRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartAssessmentRunXAmzTargetEnum;
}
export declare class StartAssessmentRunRequest extends SpeakeasyBase {
    headers: StartAssessmentRunHeaders;
    request: shared.StartAssessmentRunRequest;
}
export declare class StartAssessmentRunResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    agentsAlreadyRunningAssessmentException?: any;
    contentType: string;
    internalException?: any;
    invalidCrossAccountRoleException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    noSuchEntityException?: any;
    serviceTemporarilyUnavailableException?: any;
    startAssessmentRunResponse?: shared.StartAssessmentRunResponse;
    statusCode: number;
}
