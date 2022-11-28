import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListGraphsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListGraphsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListGraphsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListGraphsRequest extends SpeakeasyBase {
    queryParams: ListGraphsQueryParams;
    headers: ListGraphsHeaders;
    request: ListGraphsRequestBody;
}
export declare class ListGraphsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listGraphsResponse?: shared.ListGraphsResponse;
    statusCode: number;
    validationException?: any;
}
