import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListEntitiesDetectionJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListEntitiesDetectionJobsXAmzTargetEnum {
    Comprehend20171127ListEntitiesDetectionJobs = "Comprehend_20171127.ListEntitiesDetectionJobs"
}
export declare class ListEntitiesDetectionJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEntitiesDetectionJobsXAmzTargetEnum;
}
export declare class ListEntitiesDetectionJobsRequest extends SpeakeasyBase {
    queryParams: ListEntitiesDetectionJobsQueryParams;
    headers: ListEntitiesDetectionJobsHeaders;
    request: shared.ListEntitiesDetectionJobsRequest;
}
export declare class ListEntitiesDetectionJobsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidFilterException?: any;
    invalidRequestException?: any;
    listEntitiesDetectionJobsResponse?: shared.ListEntitiesDetectionJobsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
