import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteForecastExportJobXAmzTargetEnum {
    AmazonForecastDeleteForecastExportJob = "AmazonForecast.DeleteForecastExportJob"
}
export declare class DeleteForecastExportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteForecastExportJobXAmzTargetEnum;
}
export declare class DeleteForecastExportJobRequest extends SpeakeasyBase {
    headers: DeleteForecastExportJobHeaders;
    request: shared.DeleteForecastExportJobRequest;
}
export declare class DeleteForecastExportJobResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
