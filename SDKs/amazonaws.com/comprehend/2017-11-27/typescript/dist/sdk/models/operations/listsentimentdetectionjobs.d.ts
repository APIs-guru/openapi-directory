import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSentimentDetectionJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListSentimentDetectionJobsXAmzTargetEnum {
    Comprehend20171127ListSentimentDetectionJobs = "Comprehend_20171127.ListSentimentDetectionJobs"
}
export declare class ListSentimentDetectionJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSentimentDetectionJobsXAmzTargetEnum;
}
export declare class ListSentimentDetectionJobsRequest extends SpeakeasyBase {
    queryParams: ListSentimentDetectionJobsQueryParams;
    headers: ListSentimentDetectionJobsHeaders;
    request: shared.ListSentimentDetectionJobsRequest;
}
export declare class ListSentimentDetectionJobsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidFilterException?: any;
    invalidRequestException?: any;
    listSentimentDetectionJobsResponse?: shared.ListSentimentDetectionJobsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
