import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAssessmentsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListAssessmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAssessmentsRequest extends SpeakeasyBase {
    queryParams: ListAssessmentsQueryParams;
    headers: ListAssessmentsHeaders;
}
export declare class ListAssessmentsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listAssessmentsResponse?: shared.ListAssessmentsResponse;
    statusCode: number;
    validationException?: any;
}
