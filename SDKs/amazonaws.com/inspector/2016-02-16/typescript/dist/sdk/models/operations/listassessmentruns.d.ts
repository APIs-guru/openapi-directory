import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAssessmentRunsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAssessmentRunsXAmzTargetEnum {
    InspectorServiceListAssessmentRuns = "InspectorService.ListAssessmentRuns"
}
export declare class ListAssessmentRunsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAssessmentRunsXAmzTargetEnum;
}
export declare class ListAssessmentRunsRequest extends SpeakeasyBase {
    queryParams: ListAssessmentRunsQueryParams;
    headers: ListAssessmentRunsHeaders;
    request: shared.ListAssessmentRunsRequest;
}
export declare class ListAssessmentRunsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    listAssessmentRunsResponse?: shared.ListAssessmentRunsResponse;
    noSuchEntityException?: any;
    statusCode: number;
}
