import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEventTypesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListEventTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListEventTypesRequestBody extends SpeakeasyBase {
    filters?: shared.ListEventTypesFilter[];
    maxResults?: number;
    nextToken?: string;
}
export declare class ListEventTypesRequest extends SpeakeasyBase {
    queryParams: ListEventTypesQueryParams;
    headers: ListEventTypesHeaders;
    request: ListEventTypesRequestBody;
}
export declare class ListEventTypesResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listEventTypesResult?: shared.ListEventTypesResult;
    statusCode: number;
    validationException?: any;
}
