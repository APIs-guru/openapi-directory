import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class FlushStageAuthorizersCachePathParams extends SpeakeasyBase {
    restapiId: string;
    stageName: string;
}
export declare class FlushStageAuthorizersCacheHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class FlushStageAuthorizersCacheRequest extends SpeakeasyBase {
    pathParams: FlushStageAuthorizersCachePathParams;
    headers: FlushStageAuthorizersCacheHeaders;
}
export declare class FlushStageAuthorizersCacheResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
