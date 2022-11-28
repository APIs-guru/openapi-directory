import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeletePredictorXAmzTargetEnum {
    AmazonForecastDeletePredictor = "AmazonForecast.DeletePredictor"
}
export declare class DeletePredictorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePredictorXAmzTargetEnum;
}
export declare class DeletePredictorRequest extends SpeakeasyBase {
    headers: DeletePredictorHeaders;
    request: shared.DeletePredictorRequest;
}
export declare class DeletePredictorResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
