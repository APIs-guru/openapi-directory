import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchDetectDominantLanguageXAmzTargetEnum {
    Comprehend20171127BatchDetectDominantLanguage = "Comprehend_20171127.BatchDetectDominantLanguage"
}
export declare class BatchDetectDominantLanguageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDetectDominantLanguageXAmzTargetEnum;
}
export declare class BatchDetectDominantLanguageRequest extends SpeakeasyBase {
    headers: BatchDetectDominantLanguageHeaders;
    request: shared.BatchDetectDominantLanguageRequest;
}
export declare class BatchDetectDominantLanguageResponse extends SpeakeasyBase {
    batchDetectDominantLanguageResponse?: shared.BatchDetectDominantLanguageResponse;
    batchSizeLimitExceededException?: any;
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
    textSizeLimitExceededException?: any;
}
