import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAccuracyMetricsXAmzTargetEnum {
    AmazonForecastGetAccuracyMetrics = "AmazonForecast.GetAccuracyMetrics"
}
export declare class GetAccuracyMetricsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAccuracyMetricsXAmzTargetEnum;
}
export declare class GetAccuracyMetricsRequest extends SpeakeasyBase {
    headers: GetAccuracyMetricsHeaders;
    request: shared.GetAccuracyMetricsRequest;
}
export declare class GetAccuracyMetricsResponse extends SpeakeasyBase {
    contentType: string;
    getAccuracyMetricsResponse?: shared.GetAccuracyMetricsResponse;
    invalidInputException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
