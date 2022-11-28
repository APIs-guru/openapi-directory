import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiMappingsPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetApiMappingsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class GetApiMappingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetApiMappingsRequest extends SpeakeasyBase {
    pathParams: GetApiMappingsPathParams;
    queryParams: GetApiMappingsQueryParams;
    headers: GetApiMappingsHeaders;
}
export declare class GetApiMappingsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getApiMappingsResponse?: shared.GetApiMappingsResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
