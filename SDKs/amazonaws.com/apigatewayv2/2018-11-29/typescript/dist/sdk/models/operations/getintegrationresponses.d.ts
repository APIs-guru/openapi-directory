import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIntegrationResponsesPathParams extends SpeakeasyBase {
    apiId: string;
    integrationId: string;
}
export declare class GetIntegrationResponsesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class GetIntegrationResponsesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetIntegrationResponsesRequest extends SpeakeasyBase {
    pathParams: GetIntegrationResponsesPathParams;
    queryParams: GetIntegrationResponsesQueryParams;
    headers: GetIntegrationResponsesHeaders;
}
export declare class GetIntegrationResponsesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getIntegrationResponsesResponse?: shared.GetIntegrationResponsesResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
