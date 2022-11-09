import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StopEntitiesDetectionJobXAmzTargetEnum {
    Comprehend20171127StopEntitiesDetectionJob = "Comprehend_20171127.StopEntitiesDetectionJob"
}
export declare class StopEntitiesDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopEntitiesDetectionJobXAmzTargetEnum;
}
export declare class StopEntitiesDetectionJobRequest extends SpeakeasyBase {
    headers: StopEntitiesDetectionJobHeaders;
    request: shared.StopEntitiesDetectionJobRequest;
}
export declare class StopEntitiesDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    jobNotFoundException?: any;
    statusCode: number;
    stopEntitiesDetectionJobResponse?: shared.StopEntitiesDetectionJobResponse;
}
