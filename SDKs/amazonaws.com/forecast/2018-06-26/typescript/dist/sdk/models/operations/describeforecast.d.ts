import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeForecastXAmzTargetEnum {
    AmazonForecastDescribeForecast = "AmazonForecast.DescribeForecast"
}
export declare class DescribeForecastHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeForecastXAmzTargetEnum;
}
export declare class DescribeForecastRequest extends SpeakeasyBase {
    headers: DescribeForecastHeaders;
    request: shared.DescribeForecastRequest;
}
export declare class DescribeForecastResponse extends SpeakeasyBase {
    contentType: string;
    describeForecastResponse?: shared.DescribeForecastResponse;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
