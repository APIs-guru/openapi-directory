import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProfileObjectsPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ListProfileObjectsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListProfileObjectsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The filter applied to ListProfileObjects response to include profile objects with the specified index values. This filter is only supported for ObjectTypeName _asset and _case.
**/
export declare class ListProfileObjectsRequestBodyObjectFilter extends SpeakeasyBase {
    keyName?: string;
    values?: string[];
}
export declare class ListProfileObjectsRequestBody extends SpeakeasyBase {
    objectFilter?: ListProfileObjectsRequestBodyObjectFilter;
    objectTypeName: string;
    profileId: string;
}
export declare class ListProfileObjectsRequest extends SpeakeasyBase {
    pathParams: ListProfileObjectsPathParams;
    queryParams: ListProfileObjectsQueryParams;
    headers: ListProfileObjectsHeaders;
    request: ListProfileObjectsRequestBody;
}
export declare class ListProfileObjectsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    internalServerException?: any;
    listProfileObjectsResponse?: shared.ListProfileObjectsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
