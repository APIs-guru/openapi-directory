import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteForecastXAmzTargetEnum {
    AmazonForecastDeleteForecast = "AmazonForecast.DeleteForecast"
}
export declare class DeleteForecastHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteForecastXAmzTargetEnum;
}
export declare class DeleteForecastRequest extends SpeakeasyBase {
    headers: DeleteForecastHeaders;
    request: shared.DeleteForecastRequest;
}
export declare class DeleteForecastResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
