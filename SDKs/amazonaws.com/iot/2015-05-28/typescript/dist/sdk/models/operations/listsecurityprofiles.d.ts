import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSecurityProfilesQueryParams extends SpeakeasyBase {
    dimensionName?: string;
    maxResults?: number;
    metricName?: string;
    nextToken?: string;
}
export declare class ListSecurityProfilesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSecurityProfilesRequest extends SpeakeasyBase {
    queryParams: ListSecurityProfilesQueryParams;
    headers: ListSecurityProfilesHeaders;
}
export declare class ListSecurityProfilesResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listSecurityProfilesResponse?: shared.ListSecurityProfilesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
