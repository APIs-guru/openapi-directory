import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTypesPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare enum ListTypesFormatEnum {
    Sdl = "SDL",
    Json = "JSON"
}
export declare class ListTypesQueryParams extends SpeakeasyBase {
    format: ListTypesFormatEnum;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTypesRequest extends SpeakeasyBase {
    pathParams: ListTypesPathParams;
    queryParams: ListTypesQueryParams;
    headers: ListTypesHeaders;
}
export declare class ListTypesResponse extends SpeakeasyBase {
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    internalFailureException?: any;
    listTypesResponse?: shared.ListTypesResponse;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
