import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteApiCachePathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class DeleteApiCacheHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteApiCacheRequest extends SpeakeasyBase {
    pathParams: DeleteApiCachePathParams;
    headers: DeleteApiCacheHeaders;
}
export declare class DeleteApiCacheResponse extends SpeakeasyBase {
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    deleteApiCacheResponse?: Map<string, any>;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
