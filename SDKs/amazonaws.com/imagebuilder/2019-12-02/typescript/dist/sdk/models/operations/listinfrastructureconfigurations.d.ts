import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListInfrastructureConfigurationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListInfrastructureConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListInfrastructureConfigurationsRequestBody extends SpeakeasyBase {
    filters?: shared.Filter[];
    maxResults?: number;
    nextToken?: string;
}
export declare class ListInfrastructureConfigurationsRequest extends SpeakeasyBase {
    queryParams: ListInfrastructureConfigurationsQueryParams;
    headers: ListInfrastructureConfigurationsHeaders;
    request: ListInfrastructureConfigurationsRequestBody;
}
export declare class ListInfrastructureConfigurationsResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    invalidPaginationTokenException?: any;
    invalidRequestException?: any;
    listInfrastructureConfigurationsResponse?: shared.ListInfrastructureConfigurationsResponse;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
