import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DetectPiiEntitiesXAmzTargetEnum {
    Comprehend20171127DetectPiiEntities = "Comprehend_20171127.DetectPiiEntities"
}
export declare class DetectPiiEntitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectPiiEntitiesXAmzTargetEnum;
}
export declare class DetectPiiEntitiesRequest extends SpeakeasyBase {
    headers: DetectPiiEntitiesHeaders;
    request: shared.DetectPiiEntitiesRequest;
}
export declare class DetectPiiEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    detectPiiEntitiesResponse?: shared.DetectPiiEntitiesResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
    textSizeLimitExceededException?: any;
    unsupportedLanguageException?: any;
}
