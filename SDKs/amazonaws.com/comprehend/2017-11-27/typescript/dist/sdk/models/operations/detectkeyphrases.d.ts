import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DetectKeyPhrasesXAmzTargetEnum {
    Comprehend20171127DetectKeyPhrases = "Comprehend_20171127.DetectKeyPhrases"
}
export declare class DetectKeyPhrasesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectKeyPhrasesXAmzTargetEnum;
}
export declare class DetectKeyPhrasesRequest extends SpeakeasyBase {
    headers: DetectKeyPhrasesHeaders;
    request: shared.DetectKeyPhrasesRequest;
}
export declare class DetectKeyPhrasesResponse extends SpeakeasyBase {
    contentType: string;
    detectKeyPhrasesResponse?: shared.DetectKeyPhrasesResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
    textSizeLimitExceededException?: any;
    unsupportedLanguageException?: any;
}
