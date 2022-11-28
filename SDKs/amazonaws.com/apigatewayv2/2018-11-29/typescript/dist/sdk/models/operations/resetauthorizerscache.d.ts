import { SpeakeasyBase } from "../../../internal/utils";
export declare class ResetAuthorizersCachePathParams extends SpeakeasyBase {
    apiId: string;
    stageName: string;
}
export declare class ResetAuthorizersCacheHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ResetAuthorizersCacheRequest extends SpeakeasyBase {
    pathParams: ResetAuthorizersCachePathParams;
    headers: ResetAuthorizersCacheHeaders;
}
export declare class ResetAuthorizersCacheResponse extends SpeakeasyBase {
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
