import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAssessmentReportsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListAssessmentReportsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAssessmentReportsRequest extends SpeakeasyBase {
    queryParams: ListAssessmentReportsQueryParams;
    headers: ListAssessmentReportsHeaders;
}
export declare class ListAssessmentReportsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listAssessmentReportsResponse?: shared.ListAssessmentReportsResponse;
    statusCode: number;
    validationException?: any;
}
