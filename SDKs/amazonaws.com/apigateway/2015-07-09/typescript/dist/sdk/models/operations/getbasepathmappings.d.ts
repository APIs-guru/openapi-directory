import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBasePathMappingsPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetBasePathMappingsQueryParams extends SpeakeasyBase {
    limit?: number;
    position?: string;
}
export declare class GetBasePathMappingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBasePathMappingsRequest extends SpeakeasyBase {
    pathParams: GetBasePathMappingsPathParams;
    queryParams: GetBasePathMappingsQueryParams;
    headers: GetBasePathMappingsHeaders;
}
export declare class GetBasePathMappingsResponse extends SpeakeasyBase {
    badRequestException?: any;
    basePathMappings?: shared.BasePathMappings;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
