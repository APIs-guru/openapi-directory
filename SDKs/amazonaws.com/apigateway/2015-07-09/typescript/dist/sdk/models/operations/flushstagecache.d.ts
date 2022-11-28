import { SpeakeasyBase } from "../../../internal/utils";
export declare class FlushStageCachePathParams extends SpeakeasyBase {
    restapiId: string;
    stageName: string;
}
export declare class FlushStageCacheHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class FlushStageCacheRequest extends SpeakeasyBase {
    pathParams: FlushStageCachePathParams;
    headers: FlushStageCacheHeaders;
}
export declare class FlushStageCacheResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
