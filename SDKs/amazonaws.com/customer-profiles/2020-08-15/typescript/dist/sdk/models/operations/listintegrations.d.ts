import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListIntegrationsPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class ListIntegrationsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListIntegrationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListIntegrationsRequest extends SpeakeasyBase {
    pathParams: ListIntegrationsPathParams;
    queryParams: ListIntegrationsQueryParams;
    headers: ListIntegrationsHeaders;
}
export declare class ListIntegrationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    internalServerException?: any;
    listIntegrationsResponse?: shared.ListIntegrationsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
