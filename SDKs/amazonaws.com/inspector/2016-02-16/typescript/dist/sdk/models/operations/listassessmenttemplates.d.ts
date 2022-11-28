import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAssessmentTemplatesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAssessmentTemplatesXAmzTargetEnum {
    InspectorServiceListAssessmentTemplates = "InspectorService.ListAssessmentTemplates"
}
export declare class ListAssessmentTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAssessmentTemplatesXAmzTargetEnum;
}
export declare class ListAssessmentTemplatesRequest extends SpeakeasyBase {
    queryParams: ListAssessmentTemplatesQueryParams;
    headers: ListAssessmentTemplatesHeaders;
    request: shared.ListAssessmentTemplatesRequest;
}
export declare class ListAssessmentTemplatesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    listAssessmentTemplatesResponse?: shared.ListAssessmentTemplatesResponse;
    noSuchEntityException?: any;
    statusCode: number;
}
