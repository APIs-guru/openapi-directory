import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetPredictiveScalingForecastActionEnum {
    GetPredictiveScalingForecast = "GetPredictiveScalingForecast"
}
export declare enum GetGetPredictiveScalingForecastVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetGetPredictiveScalingForecastQueryParams extends SpeakeasyBase {
    action: GetGetPredictiveScalingForecastActionEnum;
    autoScalingGroupName: string;
    endTime: Date;
    policyName: string;
    startTime: Date;
    version: GetGetPredictiveScalingForecastVersionEnum;
}
export declare class GetGetPredictiveScalingForecastHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetPredictiveScalingForecastRequest extends SpeakeasyBase {
    queryParams: GetGetPredictiveScalingForecastQueryParams;
    headers: GetGetPredictiveScalingForecastHeaders;
}
export declare class GetGetPredictiveScalingForecastResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
