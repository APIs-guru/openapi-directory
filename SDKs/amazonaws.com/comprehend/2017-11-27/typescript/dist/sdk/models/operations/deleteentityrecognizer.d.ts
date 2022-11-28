import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteEntityRecognizerXAmzTargetEnum {
    Comprehend20171127DeleteEntityRecognizer = "Comprehend_20171127.DeleteEntityRecognizer"
}
export declare class DeleteEntityRecognizerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEntityRecognizerXAmzTargetEnum;
}
export declare class DeleteEntityRecognizerRequest extends SpeakeasyBase {
    headers: DeleteEntityRecognizerHeaders;
    request: shared.DeleteEntityRecognizerRequest;
}
export declare class DeleteEntityRecognizerResponse extends SpeakeasyBase {
    contentType: string;
    deleteEntityRecognizerResponse?: Map<string, any>;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
