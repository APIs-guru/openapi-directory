import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListKeyPhrasesDetectionJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListKeyPhrasesDetectionJobsXAmzTargetEnum {
    Comprehend20171127ListKeyPhrasesDetectionJobs = "Comprehend_20171127.ListKeyPhrasesDetectionJobs"
}
export declare class ListKeyPhrasesDetectionJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListKeyPhrasesDetectionJobsXAmzTargetEnum;
}
export declare class ListKeyPhrasesDetectionJobsRequest extends SpeakeasyBase {
    queryParams: ListKeyPhrasesDetectionJobsQueryParams;
    headers: ListKeyPhrasesDetectionJobsHeaders;
    request: shared.ListKeyPhrasesDetectionJobsRequest;
}
export declare class ListKeyPhrasesDetectionJobsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidFilterException?: any;
    invalidRequestException?: any;
    listKeyPhrasesDetectionJobsResponse?: shared.ListKeyPhrasesDetectionJobsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
