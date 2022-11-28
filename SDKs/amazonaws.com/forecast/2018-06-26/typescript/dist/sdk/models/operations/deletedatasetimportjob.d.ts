import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDatasetImportJobXAmzTargetEnum {
    AmazonForecastDeleteDatasetImportJob = "AmazonForecast.DeleteDatasetImportJob"
}
export declare class DeleteDatasetImportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDatasetImportJobXAmzTargetEnum;
}
export declare class DeleteDatasetImportJobRequest extends SpeakeasyBase {
    headers: DeleteDatasetImportJobHeaders;
    request: shared.DeleteDatasetImportJobRequest;
}
export declare class DeleteDatasetImportJobResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
