import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDatasetGroupXAmzTargetEnum {
    AmazonForecastUpdateDatasetGroup = "AmazonForecast.UpdateDatasetGroup"
}
export declare class UpdateDatasetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDatasetGroupXAmzTargetEnum;
}
export declare class UpdateDatasetGroupRequest extends SpeakeasyBase {
    headers: UpdateDatasetGroupHeaders;
    request: shared.UpdateDatasetGroupRequest;
}
export declare class UpdateDatasetGroupResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateDatasetGroupResponse?: Map<string, any>;
}
