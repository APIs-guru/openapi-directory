import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreatePredictorXAmzTargetEnum {
    AmazonForecastCreatePredictor = "AmazonForecast.CreatePredictor"
}
export declare class CreatePredictorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePredictorXAmzTargetEnum;
}
export declare class CreatePredictorRequest extends SpeakeasyBase {
    headers: CreatePredictorHeaders;
    request: shared.CreatePredictorRequest;
}
export declare class CreatePredictorResponse extends SpeakeasyBase {
    contentType: string;
    createPredictorResponse?: shared.CreatePredictorResponse;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
