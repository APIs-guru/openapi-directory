import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDocumentClassifierXAmzTargetEnum {
    Comprehend20171127CreateDocumentClassifier = "Comprehend_20171127.CreateDocumentClassifier"
}
export declare class CreateDocumentClassifierHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDocumentClassifierXAmzTargetEnum;
}
export declare class CreateDocumentClassifierRequest extends SpeakeasyBase {
    headers: CreateDocumentClassifierHeaders;
    request: shared.CreateDocumentClassifierRequest;
}
export declare class CreateDocumentClassifierResponse extends SpeakeasyBase {
    contentType: string;
    createDocumentClassifierResponse?: shared.CreateDocumentClassifierResponse;
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
