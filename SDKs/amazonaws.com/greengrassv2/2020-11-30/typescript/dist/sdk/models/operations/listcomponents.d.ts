import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListComponentsScopeEnum {
    Private = "PRIVATE",
    Public = "PUBLIC"
}
export declare class ListComponentsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    scope?: ListComponentsScopeEnum;
}
export declare class ListComponentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListComponentsRequest extends SpeakeasyBase {
    queryParams: ListComponentsQueryParams;
    headers: ListComponentsHeaders;
}
export declare class ListComponentsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listComponentsResponse?: shared.ListComponentsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
