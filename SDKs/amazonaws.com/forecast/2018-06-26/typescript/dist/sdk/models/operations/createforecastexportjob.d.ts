import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateForecastExportJobXAmzTargetEnum {
    AmazonForecastCreateForecastExportJob = "AmazonForecast.CreateForecastExportJob"
}
export declare class CreateForecastExportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateForecastExportJobXAmzTargetEnum;
}
export declare class CreateForecastExportJobRequest extends SpeakeasyBase {
    headers: CreateForecastExportJobHeaders;
    request: shared.CreateForecastExportJobRequest;
}
export declare class CreateForecastExportJobResponse extends SpeakeasyBase {
    contentType: string;
    createForecastExportJobResponse?: shared.CreateForecastExportJobResponse;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
