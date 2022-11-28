import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopSentimentDetectionJobXAmzTargetEnum {
    Comprehend20171127StopSentimentDetectionJob = "Comprehend_20171127.StopSentimentDetectionJob"
}
export declare class StopSentimentDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopSentimentDetectionJobXAmzTargetEnum;
}
export declare class StopSentimentDetectionJobRequest extends SpeakeasyBase {
    headers: StopSentimentDetectionJobHeaders;
    request: shared.StopSentimentDetectionJobRequest;
}
export declare class StopSentimentDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    jobNotFoundException?: any;
    statusCode: number;
    stopSentimentDetectionJobResponse?: shared.StopSentimentDetectionJobResponse;
}
