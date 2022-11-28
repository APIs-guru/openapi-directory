import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopAssessmentRunXAmzTargetEnum {
    InspectorServiceStopAssessmentRun = "InspectorService.StopAssessmentRun"
}
export declare class StopAssessmentRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopAssessmentRunXAmzTargetEnum;
}
export declare class StopAssessmentRunRequest extends SpeakeasyBase {
    headers: StopAssessmentRunHeaders;
    request: shared.StopAssessmentRunRequest;
}
export declare class StopAssessmentRunResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    noSuchEntityException?: any;
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
}
