import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDataSourcesPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class ListDataSourcesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListDataSourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDataSourcesRequest extends SpeakeasyBase {
    pathParams: ListDataSourcesPathParams;
    queryParams: ListDataSourcesQueryParams;
    headers: ListDataSourcesHeaders;
}
export declare class ListDataSourcesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    listDataSourcesResponse?: shared.ListDataSourcesResponse;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
