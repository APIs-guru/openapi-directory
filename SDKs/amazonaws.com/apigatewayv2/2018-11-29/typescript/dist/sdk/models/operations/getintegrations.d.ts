import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIntegrationsPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class GetIntegrationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class GetIntegrationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetIntegrationsRequest extends SpeakeasyBase {
    pathParams: GetIntegrationsPathParams;
    queryParams: GetIntegrationsQueryParams;
    headers: GetIntegrationsHeaders;
}
export declare class GetIntegrationsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getIntegrationsResponse?: shared.GetIntegrationsResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
