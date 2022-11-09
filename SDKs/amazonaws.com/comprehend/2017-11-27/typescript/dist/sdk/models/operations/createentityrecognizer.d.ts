import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateEntityRecognizerXAmzTargetEnum {
    Comprehend20171127CreateEntityRecognizer = "Comprehend_20171127.CreateEntityRecognizer"
}
export declare class CreateEntityRecognizerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEntityRecognizerXAmzTargetEnum;
}
export declare class CreateEntityRecognizerRequest extends SpeakeasyBase {
    headers: CreateEntityRecognizerHeaders;
    request: shared.CreateEntityRecognizerRequest;
}
export declare class CreateEntityRecognizerResponse extends SpeakeasyBase {
    contentType: string;
    createEntityRecognizerResponse?: shared.CreateEntityRecognizerResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    kmsKeyValidationException?: any;
    resourceInUseException?: any;
    resourceLimitExceededException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    tooManyTagsException?: any;
    unsupportedLanguageException?: any;
}
