import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListDominantLanguageDetectionJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDominantLanguageDetectionJobsXAmzTargetEnum {
    Comprehend20171127ListDominantLanguageDetectionJobs = "Comprehend_20171127.ListDominantLanguageDetectionJobs"
}
export declare class ListDominantLanguageDetectionJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDominantLanguageDetectionJobsXAmzTargetEnum;
}
export declare class ListDominantLanguageDetectionJobsRequest extends SpeakeasyBase {
    queryParams: ListDominantLanguageDetectionJobsQueryParams;
    headers: ListDominantLanguageDetectionJobsHeaders;
    request: shared.ListDominantLanguageDetectionJobsRequest;
}
export declare class ListDominantLanguageDetectionJobsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidFilterException?: any;
    invalidRequestException?: any;
    listDominantLanguageDetectionJobsResponse?: shared.ListDominantLanguageDetectionJobsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
