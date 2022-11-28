import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribePredictorBacktestExportJobXAmzTargetEnum {
    AmazonForecastDescribePredictorBacktestExportJob = "AmazonForecast.DescribePredictorBacktestExportJob"
}
export declare class DescribePredictorBacktestExportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePredictorBacktestExportJobXAmzTargetEnum;
}
export declare class DescribePredictorBacktestExportJobRequest extends SpeakeasyBase {
    headers: DescribePredictorBacktestExportJobHeaders;
    request: shared.DescribePredictorBacktestExportJobRequest;
}
export declare class DescribePredictorBacktestExportJobResponse extends SpeakeasyBase {
    contentType: string;
    describePredictorBacktestExportJobResponse?: shared.DescribePredictorBacktestExportJobResponse;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
