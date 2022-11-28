import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListResolversByFunctionPathParams extends SpeakeasyBase {
    apiId: string;
    functionId: string;
}
export declare class ListResolversByFunctionQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListResolversByFunctionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListResolversByFunctionRequest extends SpeakeasyBase {
    pathParams: ListResolversByFunctionPathParams;
    queryParams: ListResolversByFunctionQueryParams;
    headers: ListResolversByFunctionHeaders;
}
export declare class ListResolversByFunctionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    listResolversByFunctionResponse?: shared.ListResolversByFunctionResponse;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
