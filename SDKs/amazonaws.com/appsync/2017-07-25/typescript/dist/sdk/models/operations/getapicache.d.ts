import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetApiCachePathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class GetApiCacheHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetApiCacheRequest extends SpeakeasyBase {
    pathParams: GetApiCachePathParams;
    headers: GetApiCacheHeaders;
}
export declare class GetApiCacheResponse extends SpeakeasyBase {
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    getApiCacheResponse?: shared.GetApiCacheResponse;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
