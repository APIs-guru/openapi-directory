import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListTopicsDetectionJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTopicsDetectionJobsXAmzTargetEnum {
    Comprehend20171127ListTopicsDetectionJobs = "Comprehend_20171127.ListTopicsDetectionJobs"
}
export declare class ListTopicsDetectionJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTopicsDetectionJobsXAmzTargetEnum;
}
export declare class ListTopicsDetectionJobsRequest extends SpeakeasyBase {
    queryParams: ListTopicsDetectionJobsQueryParams;
    headers: ListTopicsDetectionJobsHeaders;
    request: shared.ListTopicsDetectionJobsRequest;
}
export declare class ListTopicsDetectionJobsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidFilterException?: any;
    invalidRequestException?: any;
    listTopicsDetectionJobsResponse?: shared.ListTopicsDetectionJobsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
