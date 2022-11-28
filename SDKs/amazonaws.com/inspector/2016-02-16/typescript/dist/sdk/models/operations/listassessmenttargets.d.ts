import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAssessmentTargetsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAssessmentTargetsXAmzTargetEnum {
    InspectorServiceListAssessmentTargets = "InspectorService.ListAssessmentTargets"
}
export declare class ListAssessmentTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAssessmentTargetsXAmzTargetEnum;
}
export declare class ListAssessmentTargetsRequest extends SpeakeasyBase {
    queryParams: ListAssessmentTargetsQueryParams;
    headers: ListAssessmentTargetsHeaders;
    request: shared.ListAssessmentTargetsRequest;
}
export declare class ListAssessmentTargetsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    listAssessmentTargetsResponse?: shared.ListAssessmentTargetsResponse;
    statusCode: number;
}
