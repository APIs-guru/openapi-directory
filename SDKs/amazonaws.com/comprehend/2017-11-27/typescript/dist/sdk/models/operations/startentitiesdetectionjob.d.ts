import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartEntitiesDetectionJobXAmzTargetEnum {
    Comprehend20171127StartEntitiesDetectionJob = "Comprehend_20171127.StartEntitiesDetectionJob"
}
export declare class StartEntitiesDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartEntitiesDetectionJobXAmzTargetEnum;
}
export declare class StartEntitiesDetectionJobRequest extends SpeakeasyBase {
    headers: StartEntitiesDetectionJobHeaders;
    request: shared.StartEntitiesDetectionJobRequest;
}
export declare class StartEntitiesDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    kmsKeyValidationException?: any;
    resourceNotFoundException?: any;
    resourceUnavailableException?: any;
    startEntitiesDetectionJobResponse?: shared.StartEntitiesDetectionJobResponse;
    statusCode: number;
    tooManyRequestsException?: any;
    tooManyTagsException?: any;
}
