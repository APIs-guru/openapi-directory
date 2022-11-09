import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum BatchDetectEntitiesXAmzTargetEnum {
    Comprehend20171127BatchDetectEntities = "Comprehend_20171127.BatchDetectEntities"
}
export declare class BatchDetectEntitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDetectEntitiesXAmzTargetEnum;
}
export declare class BatchDetectEntitiesRequest extends SpeakeasyBase {
    headers: BatchDetectEntitiesHeaders;
    request: shared.BatchDetectEntitiesRequest;
}
export declare class BatchDetectEntitiesResponse extends SpeakeasyBase {
    batchDetectEntitiesResponse?: shared.BatchDetectEntitiesResponse;
    batchSizeLimitExceededException?: any;
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
    textSizeLimitExceededException?: any;
    unsupportedLanguageException?: any;
}
