import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeletePredictorBacktestExportJobXAmzTargetEnum {
    AmazonForecastDeletePredictorBacktestExportJob = "AmazonForecast.DeletePredictorBacktestExportJob"
}
export declare class DeletePredictorBacktestExportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePredictorBacktestExportJobXAmzTargetEnum;
}
export declare class DeletePredictorBacktestExportJobRequest extends SpeakeasyBase {
    headers: DeletePredictorBacktestExportJobHeaders;
    request: shared.DeletePredictorBacktestExportJobRequest;
}
export declare class DeletePredictorBacktestExportJobResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
