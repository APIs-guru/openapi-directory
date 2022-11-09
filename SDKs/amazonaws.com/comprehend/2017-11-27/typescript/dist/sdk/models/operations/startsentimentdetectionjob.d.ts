import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartSentimentDetectionJobXAmzTargetEnum {
    Comprehend20171127StartSentimentDetectionJob = "Comprehend_20171127.StartSentimentDetectionJob"
}
export declare class StartSentimentDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartSentimentDetectionJobXAmzTargetEnum;
}
export declare class StartSentimentDetectionJobRequest extends SpeakeasyBase {
    headers: StartSentimentDetectionJobHeaders;
    request: shared.StartSentimentDetectionJobRequest;
}
export declare class StartSentimentDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    kmsKeyValidationException?: any;
    startSentimentDetectionJobResponse?: shared.StartSentimentDetectionJobResponse;
    statusCode: number;
    tooManyRequestsException?: any;
    tooManyTagsException?: any;
}
