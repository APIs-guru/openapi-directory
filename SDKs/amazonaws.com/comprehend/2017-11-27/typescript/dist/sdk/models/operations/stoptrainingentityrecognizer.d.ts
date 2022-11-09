import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StopTrainingEntityRecognizerXAmzTargetEnum {
    Comprehend20171127StopTrainingEntityRecognizer = "Comprehend_20171127.StopTrainingEntityRecognizer"
}
export declare class StopTrainingEntityRecognizerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopTrainingEntityRecognizerXAmzTargetEnum;
}
export declare class StopTrainingEntityRecognizerRequest extends SpeakeasyBase {
    headers: StopTrainingEntityRecognizerHeaders;
    request: shared.StopTrainingEntityRecognizerRequest;
}
export declare class StopTrainingEntityRecognizerResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopTrainingEntityRecognizerResponse?: Map<string, any>;
    tooManyRequestsException?: any;
}
