import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartTopicsDetectionJobXAmzTargetEnum {
    Comprehend20171127StartTopicsDetectionJob = "Comprehend_20171127.StartTopicsDetectionJob"
}
export declare class StartTopicsDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartTopicsDetectionJobXAmzTargetEnum;
}
export declare class StartTopicsDetectionJobRequest extends SpeakeasyBase {
    headers: StartTopicsDetectionJobHeaders;
    request: shared.StartTopicsDetectionJobRequest;
}
export declare class StartTopicsDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    kmsKeyValidationException?: any;
    startTopicsDetectionJobResponse?: shared.StartTopicsDetectionJobResponse;
    statusCode: number;
    tooManyRequestsException?: any;
    tooManyTagsException?: any;
}
