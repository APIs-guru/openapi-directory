import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDatasetGroupXAmzTargetEnum {
    AmazonForecastCreateDatasetGroup = "AmazonForecast.CreateDatasetGroup"
}
export declare class CreateDatasetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDatasetGroupXAmzTargetEnum;
}
export declare class CreateDatasetGroupRequest extends SpeakeasyBase {
    headers: CreateDatasetGroupHeaders;
    request: shared.CreateDatasetGroupRequest;
}
export declare class CreateDatasetGroupResponse extends SpeakeasyBase {
    contentType: string;
    createDatasetGroupResponse?: shared.CreateDatasetGroupResponse;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
