import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateDatasetImportJobXAmzTargetEnum {
    AmazonForecastCreateDatasetImportJob = "AmazonForecast.CreateDatasetImportJob"
}
export declare class CreateDatasetImportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDatasetImportJobXAmzTargetEnum;
}
export declare class CreateDatasetImportJobRequest extends SpeakeasyBase {
    headers: CreateDatasetImportJobHeaders;
    request: shared.CreateDatasetImportJobRequest;
}
export declare class CreateDatasetImportJobResponse extends SpeakeasyBase {
    contentType: string;
    createDatasetImportJobResponse?: shared.CreateDatasetImportJobResponse;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
