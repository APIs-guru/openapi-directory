import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum BatchDetectSentimentXAmzTargetEnum {
    Comprehend20171127BatchDetectSentiment = "Comprehend_20171127.BatchDetectSentiment"
}
export declare class BatchDetectSentimentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDetectSentimentXAmzTargetEnum;
}
export declare class BatchDetectSentimentRequest extends SpeakeasyBase {
    headers: BatchDetectSentimentHeaders;
    request: shared.BatchDetectSentimentRequest;
}
export declare class BatchDetectSentimentResponse extends SpeakeasyBase {
    batchDetectSentimentResponse?: shared.BatchDetectSentimentResponse;
    batchSizeLimitExceededException?: any;
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
    textSizeLimitExceededException?: any;
    unsupportedLanguageException?: any;
}
