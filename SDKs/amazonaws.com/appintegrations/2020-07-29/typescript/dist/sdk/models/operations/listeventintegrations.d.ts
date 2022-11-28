import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEventIntegrationsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListEventIntegrationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListEventIntegrationsRequest extends SpeakeasyBase {
    queryParams: ListEventIntegrationsQueryParams;
    headers: ListEventIntegrationsHeaders;
}
export declare class ListEventIntegrationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    listEventIntegrationsResponse?: shared.ListEventIntegrationsResponse;
    statusCode: number;
    throttlingException?: any;
}
