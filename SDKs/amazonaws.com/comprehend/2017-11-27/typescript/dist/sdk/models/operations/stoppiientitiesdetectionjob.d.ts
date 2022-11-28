import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopPiiEntitiesDetectionJobXAmzTargetEnum {
    Comprehend20171127StopPiiEntitiesDetectionJob = "Comprehend_20171127.StopPiiEntitiesDetectionJob"
}
export declare class StopPiiEntitiesDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopPiiEntitiesDetectionJobXAmzTargetEnum;
}
export declare class StopPiiEntitiesDetectionJobRequest extends SpeakeasyBase {
    headers: StopPiiEntitiesDetectionJobHeaders;
    request: shared.StopPiiEntitiesDetectionJobRequest;
}
export declare class StopPiiEntitiesDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    jobNotFoundException?: any;
    statusCode: number;
    stopPiiEntitiesDetectionJobResponse?: shared.StopPiiEntitiesDetectionJobResponse;
}
