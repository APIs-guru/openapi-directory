import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDomainsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListDomainsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDomainsRequest extends SpeakeasyBase {
    queryParams: ListDomainsQueryParams;
    headers: ListDomainsHeaders;
}
export declare class ListDomainsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    internalServerException?: any;
    listDomainsResponse?: shared.ListDomainsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
