import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DetectEntitiesXAmzTargetEnum {
    Comprehend20171127DetectEntities = "Comprehend_20171127.DetectEntities"
}
export declare class DetectEntitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectEntitiesXAmzTargetEnum;
}
export declare class DetectEntitiesRequest extends SpeakeasyBase {
    headers: DetectEntitiesHeaders;
    request: shared.DetectEntitiesRequest;
}
export declare class DetectEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    detectEntitiesResponse?: shared.DetectEntitiesResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
    textSizeLimitExceededException?: any;
    unsupportedLanguageException?: any;
}
