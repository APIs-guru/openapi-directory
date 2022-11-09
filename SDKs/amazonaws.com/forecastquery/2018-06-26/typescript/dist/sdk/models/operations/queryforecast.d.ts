import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum QueryForecastXAmzTargetEnum {
    AmazonForecastRuntimeQueryForecast = "AmazonForecastRuntime.QueryForecast"
}
export declare class QueryForecastHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: QueryForecastXAmzTargetEnum;
}
export declare class QueryForecastRequest extends SpeakeasyBase {
    headers: QueryForecastHeaders;
    request: shared.QueryForecastRequest;
}
export declare class QueryForecastResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    invalidNextTokenException?: any;
    limitExceededException?: any;
    queryForecastResponse?: shared.QueryForecastResponse;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
