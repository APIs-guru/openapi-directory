import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartPiiEntitiesDetectionJobXAmzTargetEnum {
    Comprehend20171127StartPiiEntitiesDetectionJob = "Comprehend_20171127.StartPiiEntitiesDetectionJob"
}
export declare class StartPiiEntitiesDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartPiiEntitiesDetectionJobXAmzTargetEnum;
}
export declare class StartPiiEntitiesDetectionJobRequest extends SpeakeasyBase {
    headers: StartPiiEntitiesDetectionJobHeaders;
    request: shared.StartPiiEntitiesDetectionJobRequest;
}
export declare class StartPiiEntitiesDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    kmsKeyValidationException?: any;
    startPiiEntitiesDetectionJobResponse?: shared.StartPiiEntitiesDetectionJobResponse;
    statusCode: number;
    tooManyRequestsException?: any;
    tooManyTagsException?: any;
}
