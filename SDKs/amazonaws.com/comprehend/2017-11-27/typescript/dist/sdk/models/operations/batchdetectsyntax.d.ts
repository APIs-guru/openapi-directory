import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchDetectSyntaxXAmzTargetEnum {
    Comprehend20171127BatchDetectSyntax = "Comprehend_20171127.BatchDetectSyntax"
}
export declare class BatchDetectSyntaxHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDetectSyntaxXAmzTargetEnum;
}
export declare class BatchDetectSyntaxRequest extends SpeakeasyBase {
    headers: BatchDetectSyntaxHeaders;
    request: shared.BatchDetectSyntaxRequest;
}
export declare class BatchDetectSyntaxResponse extends SpeakeasyBase {
    batchDetectSyntaxResponse?: shared.BatchDetectSyntaxResponse;
    batchSizeLimitExceededException?: any;
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
    textSizeLimitExceededException?: any;
    unsupportedLanguageException?: any;
}
