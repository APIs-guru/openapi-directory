import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ClassifyDocumentXAmzTargetEnum {
    Comprehend20171127ClassifyDocument = "Comprehend_20171127.ClassifyDocument"
}
export declare class ClassifyDocumentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ClassifyDocumentXAmzTargetEnum;
}
export declare class ClassifyDocumentRequest extends SpeakeasyBase {
    headers: ClassifyDocumentHeaders;
    request: shared.ClassifyDocumentRequest;
}
export declare class ClassifyDocumentResponse extends SpeakeasyBase {
    classifyDocumentResponse?: shared.ClassifyDocumentResponse;
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
    textSizeLimitExceededException?: any;
}
