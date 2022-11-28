import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DetectSyntaxXAmzTargetEnum {
    Comprehend20171127DetectSyntax = "Comprehend_20171127.DetectSyntax"
}
export declare class DetectSyntaxHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectSyntaxXAmzTargetEnum;
}
export declare class DetectSyntaxRequest extends SpeakeasyBase {
    headers: DetectSyntaxHeaders;
    request: shared.DetectSyntaxRequest;
}
export declare class DetectSyntaxResponse extends SpeakeasyBase {
    contentType: string;
    detectSyntaxResponse?: shared.DetectSyntaxResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
    textSizeLimitExceededException?: any;
    unsupportedLanguageException?: any;
}
