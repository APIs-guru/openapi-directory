import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteDocumentClassifierXAmzTargetEnum {
    Comprehend20171127DeleteDocumentClassifier = "Comprehend_20171127.DeleteDocumentClassifier"
}
export declare class DeleteDocumentClassifierHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDocumentClassifierXAmzTargetEnum;
}
export declare class DeleteDocumentClassifierRequest extends SpeakeasyBase {
    headers: DeleteDocumentClassifierHeaders;
    request: shared.DeleteDocumentClassifierRequest;
}
export declare class DeleteDocumentClassifierResponse extends SpeakeasyBase {
    contentType: string;
    deleteDocumentClassifierResponse?: Map<string, any>;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
