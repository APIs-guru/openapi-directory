import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateApiCachePathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class UpdateApiCacheHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateApiCacheRequestBodyApiCachingBehaviorEnum {
    FullRequestCaching = "FULL_REQUEST_CACHING",
    PerResolverCaching = "PER_RESOLVER_CACHING"
}
export declare enum UpdateApiCacheRequestBodyTypeEnum {
    T2Small = "T2_SMALL",
    T2Medium = "T2_MEDIUM",
    R4Large = "R4_LARGE",
    R4Xlarge = "R4_XLARGE",
    R42Xlarge = "R4_2XLARGE",
    R44Xlarge = "R4_4XLARGE",
    R48Xlarge = "R4_8XLARGE",
    Small = "SMALL",
    Medium = "MEDIUM",
    Large = "LARGE",
    Xlarge = "XLARGE",
    Large2X = "LARGE_2X",
    Large4X = "LARGE_4X",
    Large8X = "LARGE_8X",
    Large12X = "LARGE_12X"
}
export declare class UpdateApiCacheRequestBody extends SpeakeasyBase {
    apiCachingBehavior: UpdateApiCacheRequestBodyApiCachingBehaviorEnum;
    ttl: number;
    type: UpdateApiCacheRequestBodyTypeEnum;
}
export declare class UpdateApiCacheRequest extends SpeakeasyBase {
    pathParams: UpdateApiCachePathParams;
    headers: UpdateApiCacheHeaders;
    request: UpdateApiCacheRequestBody;
}
export declare class UpdateApiCacheResponse extends SpeakeasyBase {
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateApiCacheResponse?: shared.UpdateApiCacheResponse;
}
