import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DetectDominantLanguageXAmzTargetEnum {
    Comprehend20171127DetectDominantLanguage = "Comprehend_20171127.DetectDominantLanguage"
}
export declare class DetectDominantLanguageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectDominantLanguageXAmzTargetEnum;
}
export declare class DetectDominantLanguageRequest extends SpeakeasyBase {
    headers: DetectDominantLanguageHeaders;
    request: shared.DetectDominantLanguageRequest;
}
export declare class DetectDominantLanguageResponse extends SpeakeasyBase {
    contentType: string;
    detectDominantLanguageResponse?: shared.DetectDominantLanguageResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
    textSizeLimitExceededException?: any;
}
