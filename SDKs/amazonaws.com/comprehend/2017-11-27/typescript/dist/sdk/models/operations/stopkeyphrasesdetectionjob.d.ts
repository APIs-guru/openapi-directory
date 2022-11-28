import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopKeyPhrasesDetectionJobXAmzTargetEnum {
    Comprehend20171127StopKeyPhrasesDetectionJob = "Comprehend_20171127.StopKeyPhrasesDetectionJob"
}
export declare class StopKeyPhrasesDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopKeyPhrasesDetectionJobXAmzTargetEnum;
}
export declare class StopKeyPhrasesDetectionJobRequest extends SpeakeasyBase {
    headers: StopKeyPhrasesDetectionJobHeaders;
    request: shared.StopKeyPhrasesDetectionJobRequest;
}
export declare class StopKeyPhrasesDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    jobNotFoundException?: any;
    statusCode: number;
    stopKeyPhrasesDetectionJobResponse?: shared.StopKeyPhrasesDetectionJobResponse;
}
