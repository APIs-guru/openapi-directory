import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DetectSentimentXAmzTargetEnum {
    Comprehend20171127DetectSentiment = "Comprehend_20171127.DetectSentiment"
}
export declare class DetectSentimentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectSentimentXAmzTargetEnum;
}
export declare class DetectSentimentRequest extends SpeakeasyBase {
    headers: DetectSentimentHeaders;
    request: shared.DetectSentimentRequest;
}
export declare class DetectSentimentResponse extends SpeakeasyBase {
    contentType: string;
    detectSentimentResponse?: shared.DetectSentimentResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
    textSizeLimitExceededException?: any;
    unsupportedLanguageException?: any;
}
