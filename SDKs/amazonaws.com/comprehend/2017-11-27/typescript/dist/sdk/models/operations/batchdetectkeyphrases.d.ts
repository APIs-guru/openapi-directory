import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchDetectKeyPhrasesXAmzTargetEnum {
    Comprehend20171127BatchDetectKeyPhrases = "Comprehend_20171127.BatchDetectKeyPhrases"
}
export declare class BatchDetectKeyPhrasesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDetectKeyPhrasesXAmzTargetEnum;
}
export declare class BatchDetectKeyPhrasesRequest extends SpeakeasyBase {
    headers: BatchDetectKeyPhrasesHeaders;
    request: shared.BatchDetectKeyPhrasesRequest;
}
export declare class BatchDetectKeyPhrasesResponse extends SpeakeasyBase {
    batchDetectKeyPhrasesResponse?: shared.BatchDetectKeyPhrasesResponse;
    batchSizeLimitExceededException?: any;
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
    textSizeLimitExceededException?: any;
    unsupportedLanguageException?: any;
}
