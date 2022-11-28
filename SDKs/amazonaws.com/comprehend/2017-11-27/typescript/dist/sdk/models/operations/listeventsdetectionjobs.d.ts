import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEventsDetectionJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListEventsDetectionJobsXAmzTargetEnum {
    Comprehend20171127ListEventsDetectionJobs = "Comprehend_20171127.ListEventsDetectionJobs"
}
export declare class ListEventsDetectionJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEventsDetectionJobsXAmzTargetEnum;
}
export declare class ListEventsDetectionJobsRequest extends SpeakeasyBase {
    queryParams: ListEventsDetectionJobsQueryParams;
    headers: ListEventsDetectionJobsHeaders;
    request: shared.ListEventsDetectionJobsRequest;
}
export declare class ListEventsDetectionJobsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidFilterException?: any;
    invalidRequestException?: any;
    listEventsDetectionJobsResponse?: shared.ListEventsDetectionJobsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
