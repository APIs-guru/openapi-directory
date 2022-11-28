import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDatasetXAmzTargetEnum {
    AmazonForecastCreateDataset = "AmazonForecast.CreateDataset"
}
export declare class CreateDatasetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDatasetXAmzTargetEnum;
}
export declare class CreateDatasetRequest extends SpeakeasyBase {
    headers: CreateDatasetHeaders;
    request: shared.CreateDatasetRequest;
}
export declare class CreateDatasetResponse extends SpeakeasyBase {
    contentType: string;
    createDatasetResponse?: shared.CreateDatasetResponse;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
}
