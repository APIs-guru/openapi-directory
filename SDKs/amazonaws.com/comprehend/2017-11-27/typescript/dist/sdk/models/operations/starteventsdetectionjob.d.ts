import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartEventsDetectionJobXAmzTargetEnum {
    Comprehend20171127StartEventsDetectionJob = "Comprehend_20171127.StartEventsDetectionJob"
}
export declare class StartEventsDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartEventsDetectionJobXAmzTargetEnum;
}
export declare class StartEventsDetectionJobRequest extends SpeakeasyBase {
    headers: StartEventsDetectionJobHeaders;
    request: shared.StartEventsDetectionJobRequest;
}
export declare class StartEventsDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    kmsKeyValidationException?: any;
    startEventsDetectionJobResponse?: shared.StartEventsDetectionJobResponse;
    statusCode: number;
    tooManyRequestsException?: any;
    tooManyTagsException?: any;
}
