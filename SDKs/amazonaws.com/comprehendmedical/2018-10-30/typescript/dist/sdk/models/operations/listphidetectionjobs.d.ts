import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListPhiDetectionJobsXAmzTargetEnum {
    ComprehendMedical20181030ListPhiDetectionJobs = "ComprehendMedical_20181030.ListPHIDetectionJobs"
}
export declare class ListPhiDetectionJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPhiDetectionJobsXAmzTargetEnum;
}
export declare class ListPhiDetectionJobsRequest extends SpeakeasyBase {
    headers: ListPhiDetectionJobsHeaders;
    request: shared.ListPhiDetectionJobsRequest;
}
export declare class ListPhiDetectionJobsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listPhiDetectionJobsResponse?: shared.ListPhiDetectionJobsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
