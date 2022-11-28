import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEventIntegrationAssociationsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ListEventIntegrationAssociationsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListEventIntegrationAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListEventIntegrationAssociationsRequest extends SpeakeasyBase {
    pathParams: ListEventIntegrationAssociationsPathParams;
    queryParams: ListEventIntegrationAssociationsQueryParams;
    headers: ListEventIntegrationAssociationsHeaders;
}
export declare class ListEventIntegrationAssociationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    listEventIntegrationAssociationsResponse?: shared.ListEventIntegrationAssociationsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
