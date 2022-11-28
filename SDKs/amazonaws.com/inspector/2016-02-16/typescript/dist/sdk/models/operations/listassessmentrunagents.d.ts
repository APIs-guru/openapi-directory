import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAssessmentRunAgentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAssessmentRunAgentsXAmzTargetEnum {
    InspectorServiceListAssessmentRunAgents = "InspectorService.ListAssessmentRunAgents"
}
export declare class ListAssessmentRunAgentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAssessmentRunAgentsXAmzTargetEnum;
}
export declare class ListAssessmentRunAgentsRequest extends SpeakeasyBase {
    queryParams: ListAssessmentRunAgentsQueryParams;
    headers: ListAssessmentRunAgentsHeaders;
    request: shared.ListAssessmentRunAgentsRequest;
}
export declare class ListAssessmentRunAgentsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    listAssessmentRunAgentsResponse?: shared.ListAssessmentRunAgentsResponse;
    noSuchEntityException?: any;
    statusCode: number;
}
