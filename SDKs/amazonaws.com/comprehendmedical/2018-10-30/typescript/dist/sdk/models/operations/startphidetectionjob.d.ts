import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartPhiDetectionJobXAmzTargetEnum {
    ComprehendMedical20181030StartPhiDetectionJob = "ComprehendMedical_20181030.StartPHIDetectionJob"
}
export declare class StartPhiDetectionJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartPhiDetectionJobXAmzTargetEnum;
}
export declare class StartPhiDetectionJobRequest extends SpeakeasyBase {
    headers: StartPhiDetectionJobHeaders;
    request: shared.StartPhiDetectionJobRequest;
}
export declare class StartPhiDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    startPhiDetectionJobResponse?: shared.StartPhiDetectionJobResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
