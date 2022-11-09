import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StopPhiDetectionJobXAmzTargetEnum {
    ComprehendMedical20181030StopPhiDetectionJob = "ComprehendMedical_20181030.StopPHIDetectionJob"
}
export declare class StopPhiDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopPhiDetectionJobXAmzTargetEnum;
}
export declare class StopPhiDetectionJobRequest extends SpeakeasyBase {
    headers: StopPhiDetectionJobHeaders;
    request: shared.StopPhiDetectionJobRequest;
}
export declare class StopPhiDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopPhiDetectionJobResponse?: shared.StopPhiDetectionJobResponse;
}
