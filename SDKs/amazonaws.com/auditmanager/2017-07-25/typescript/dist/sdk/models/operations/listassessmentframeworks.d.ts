import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListAssessmentFrameworksFrameworkTypeEnum {
    Standard = "Standard",
    Custom = "Custom"
}
export declare class ListAssessmentFrameworksQueryParams extends SpeakeasyBase {
    frameworkType: ListAssessmentFrameworksFrameworkTypeEnum;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListAssessmentFrameworksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAssessmentFrameworksRequest extends SpeakeasyBase {
    queryParams: ListAssessmentFrameworksQueryParams;
    headers: ListAssessmentFrameworksHeaders;
}
export declare class ListAssessmentFrameworksResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listAssessmentFrameworksResponse?: shared.ListAssessmentFrameworksResponse;
    statusCode: number;
    validationException?: any;
}
