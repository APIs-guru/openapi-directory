import { SpeakeasyBase } from "../../../internal/utils";
export declare class FlushApiCachePathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class FlushApiCacheHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class FlushApiCacheRequest extends SpeakeasyBase {
    pathParams: FlushApiCachePathParams;
    headers: FlushApiCacheHeaders;
}
export declare class FlushApiCacheResponse extends SpeakeasyBase {
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    flushApiCacheResponse?: Map<string, any>;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
