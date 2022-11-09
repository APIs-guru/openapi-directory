import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListDistributionConfigurationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListDistributionConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDistributionConfigurationsRequestBody extends SpeakeasyBase {
    filters?: shared.Filter[];
    maxResults?: number;
    nextToken?: string;
}
export declare class ListDistributionConfigurationsRequest extends SpeakeasyBase {
    queryParams: ListDistributionConfigurationsQueryParams;
    headers: ListDistributionConfigurationsHeaders;
    request: ListDistributionConfigurationsRequestBody;
}
export declare class ListDistributionConfigurationsResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    invalidPaginationTokenException?: any;
    invalidRequestException?: any;
    listDistributionConfigurationsResponse?: shared.ListDistributionConfigurationsResponse;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
