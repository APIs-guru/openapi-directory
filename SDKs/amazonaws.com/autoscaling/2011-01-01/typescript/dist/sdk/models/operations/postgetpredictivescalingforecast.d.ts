import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetPredictiveScalingForecastActionEnum {
    GetPredictiveScalingForecast = "GetPredictiveScalingForecast"
}
export declare enum PostGetPredictiveScalingForecastVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostGetPredictiveScalingForecastQueryParams extends SpeakeasyBase {
    action: PostGetPredictiveScalingForecastActionEnum;
    version: PostGetPredictiveScalingForecastVersionEnum;
}
export declare class PostGetPredictiveScalingForecastHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetPredictiveScalingForecastRequest extends SpeakeasyBase {
    queryParams: PostGetPredictiveScalingForecastQueryParams;
    headers: PostGetPredictiveScalingForecastHeaders;
    request?: Uint8Array;
}
export declare class PostGetPredictiveScalingForecastResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
