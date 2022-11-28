import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListComponentVersionsPathParams extends SpeakeasyBase {
    arn: string;
}
export declare class ListComponentVersionsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListComponentVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListComponentVersionsRequest extends SpeakeasyBase {
    pathParams: ListComponentVersionsPathParams;
    queryParams: ListComponentVersionsQueryParams;
    headers: ListComponentVersionsHeaders;
}
export declare class ListComponentVersionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listComponentVersionsResponse?: shared.ListComponentVersionsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
