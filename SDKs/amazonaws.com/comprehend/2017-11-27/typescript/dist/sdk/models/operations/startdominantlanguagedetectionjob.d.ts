import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartDominantLanguageDetectionJobXAmzTargetEnum {
    Comprehend20171127StartDominantLanguageDetectionJob = "Comprehend_20171127.StartDominantLanguageDetectionJob"
}
export declare class StartDominantLanguageDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartDominantLanguageDetectionJobXAmzTargetEnum;
}
export declare class StartDominantLanguageDetectionJobRequest extends SpeakeasyBase {
    headers: StartDominantLanguageDetectionJobHeaders;
    request: shared.StartDominantLanguageDetectionJobRequest;
}
export declare class StartDominantLanguageDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    kmsKeyValidationException?: any;
    startDominantLanguageDetectionJobResponse?: shared.StartDominantLanguageDetectionJobResponse;
    statusCode: number;
    tooManyRequestsException?: any;
    tooManyTagsException?: any;
}
