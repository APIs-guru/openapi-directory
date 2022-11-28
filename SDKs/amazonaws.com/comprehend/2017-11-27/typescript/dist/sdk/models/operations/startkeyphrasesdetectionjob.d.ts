import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartKeyPhrasesDetectionJobXAmzTargetEnum {
    Comprehend20171127StartKeyPhrasesDetectionJob = "Comprehend_20171127.StartKeyPhrasesDetectionJob"
}
export declare class StartKeyPhrasesDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartKeyPhrasesDetectionJobXAmzTargetEnum;
}
export declare class StartKeyPhrasesDetectionJobRequest extends SpeakeasyBase {
    headers: StartKeyPhrasesDetectionJobHeaders;
    request: shared.StartKeyPhrasesDetectionJobRequest;
}
export declare class StartKeyPhrasesDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    kmsKeyValidationException?: any;
    startKeyPhrasesDetectionJobResponse?: shared.StartKeyPhrasesDetectionJobResponse;
    statusCode: number;
    tooManyRequestsException?: any;
    tooManyTagsException?: any;
}
