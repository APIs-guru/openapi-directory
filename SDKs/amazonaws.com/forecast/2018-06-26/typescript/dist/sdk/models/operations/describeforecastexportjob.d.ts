import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeForecastExportJobXAmzTargetEnum {
    AmazonForecastDescribeForecastExportJob = "AmazonForecast.DescribeForecastExportJob"
}
export declare class DescribeForecastExportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeForecastExportJobXAmzTargetEnum;
}
export declare class DescribeForecastExportJobRequest extends SpeakeasyBase {
    headers: DescribeForecastExportJobHeaders;
    request: shared.DescribeForecastExportJobRequest;
}
export declare class DescribeForecastExportJobResponse extends SpeakeasyBase {
    contentType: string;
    describeForecastExportJobResponse?: shared.DescribeForecastExportJobResponse;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
