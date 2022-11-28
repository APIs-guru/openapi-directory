import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopEventsDetectionJobXAmzTargetEnum {
    Comprehend20171127StopEventsDetectionJob = "Comprehend_20171127.StopEventsDetectionJob"
}
export declare class StopEventsDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopEventsDetectionJobXAmzTargetEnum;
}
export declare class StopEventsDetectionJobRequest extends SpeakeasyBase {
    headers: StopEventsDetectionJobHeaders;
    request: shared.StopEventsDetectionJobRequest;
}
export declare class StopEventsDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    jobNotFoundException?: any;
    statusCode: number;
    stopEventsDetectionJobResponse?: shared.StopEventsDetectionJobResponse;
}
