import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFlowsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListFlowsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFlowsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListFlowsRequest extends SpeakeasyBase {
    queryParams: ListFlowsQueryParams;
    headers: ListFlowsHeaders;
    request: ListFlowsRequestBody;
}
export declare class ListFlowsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listFlowsResponse?: shared.ListFlowsResponse;
    statusCode: number;
    validationException?: any;
}
