import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribePredictorXAmzTargetEnum {
    AmazonForecastDescribePredictor = "AmazonForecast.DescribePredictor"
}
export declare class DescribePredictorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePredictorXAmzTargetEnum;
}
export declare class DescribePredictorRequest extends SpeakeasyBase {
    headers: DescribePredictorHeaders;
    request: shared.DescribePredictorRequest;
}
export declare class DescribePredictorResponse extends SpeakeasyBase {
    contentType: string;
    describePredictorResponse?: shared.DescribePredictorResponse;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
