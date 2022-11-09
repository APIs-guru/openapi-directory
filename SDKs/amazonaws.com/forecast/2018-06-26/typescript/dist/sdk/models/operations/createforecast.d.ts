import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateForecastXAmzTargetEnum {
    AmazonForecastCreateForecast = "AmazonForecast.CreateForecast"
}
export declare class CreateForecastHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateForecastXAmzTargetEnum;
}
export declare class CreateForecastRequest extends SpeakeasyBase {
    headers: CreateForecastHeaders;
    request: shared.CreateForecastRequest;
}
export declare class CreateForecastResponse extends SpeakeasyBase {
    contentType: string;
    createForecastResponse?: shared.CreateForecastResponse;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
