import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListNodegroupsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ListNodegroupsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListNodegroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListNodegroupsRequest extends SpeakeasyBase {
    pathParams: ListNodegroupsPathParams;
    queryParams: ListNodegroupsQueryParams;
    headers: ListNodegroupsHeaders;
}
export declare class ListNodegroupsResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    listNodegroupsResponse?: shared.ListNodegroupsResponse;
    resourceNotFoundException?: any;
    serverException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
