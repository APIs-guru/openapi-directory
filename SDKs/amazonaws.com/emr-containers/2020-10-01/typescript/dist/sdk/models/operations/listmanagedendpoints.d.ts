import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListManagedEndpointsPathParams extends SpeakeasyBase {
    virtualClusterId: string;
}
export declare class ListManagedEndpointsQueryParams extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    maxResults?: number;
    nextToken?: string;
    states?: shared.EndpointStateEnum[];
    types?: string[];
}
export declare class ListManagedEndpointsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListManagedEndpointsRequest extends SpeakeasyBase {
    pathParams: ListManagedEndpointsPathParams;
    queryParams: ListManagedEndpointsQueryParams;
    headers: ListManagedEndpointsHeaders;
}
export declare class ListManagedEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listManagedEndpointsResponse?: shared.ListManagedEndpointsResponse;
    statusCode: number;
    validationException?: any;
}
