import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTranscriptQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class GetTranscriptHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzBearer: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum GetTranscriptRequestBodyScanDirectionEnum {
    Forward = "FORWARD",
    Backward = "BACKWARD"
}
export declare enum GetTranscriptRequestBodySortOrderEnum {
    Descending = "DESCENDING",
    Ascending = "ASCENDING"
}
/**
 * A filtering option for where to start. For example, if you sent 100 messages, start with message 50.
**/
export declare class GetTranscriptRequestBodyStartPosition extends SpeakeasyBase {
    absoluteTime?: string;
    id?: string;
    mostRecent?: number;
}
export declare class GetTranscriptRequestBody extends SpeakeasyBase {
    contactId?: string;
    maxResults?: number;
    nextToken?: string;
    scanDirection?: GetTranscriptRequestBodyScanDirectionEnum;
    sortOrder?: GetTranscriptRequestBodySortOrderEnum;
    startPosition?: GetTranscriptRequestBodyStartPosition;
}
export declare class GetTranscriptRequest extends SpeakeasyBase {
    queryParams: GetTranscriptQueryParams;
    headers: GetTranscriptHeaders;
    request: GetTranscriptRequestBody;
}
export declare class GetTranscriptResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getTranscriptResponse?: shared.GetTranscriptResponse;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
