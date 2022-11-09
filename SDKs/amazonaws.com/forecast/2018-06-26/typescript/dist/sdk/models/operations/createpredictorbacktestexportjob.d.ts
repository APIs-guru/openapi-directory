import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreatePredictorBacktestExportJobXAmzTargetEnum {
    AmazonForecastCreatePredictorBacktestExportJob = "AmazonForecast.CreatePredictorBacktestExportJob"
}
export declare class CreatePredictorBacktestExportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePredictorBacktestExportJobXAmzTargetEnum;
}
export declare class CreatePredictorBacktestExportJobRequest extends SpeakeasyBase {
    headers: CreatePredictorBacktestExportJobHeaders;
    request: shared.CreatePredictorBacktestExportJobRequest;
}
export declare class CreatePredictorBacktestExportJobResponse extends SpeakeasyBase {
    contentType: string;
    createPredictorBacktestExportJobResponse?: shared.CreatePredictorBacktestExportJobResponse;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
