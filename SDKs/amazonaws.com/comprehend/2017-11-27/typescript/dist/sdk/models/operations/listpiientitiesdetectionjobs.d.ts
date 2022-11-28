import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListPiiEntitiesDetectionJobsXAmzTargetEnum {
    Comprehend20171127ListPiiEntitiesDetectionJobs = "Comprehend_20171127.ListPiiEntitiesDetectionJobs"
}
export declare class ListPiiEntitiesDetectionJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPiiEntitiesDetectionJobsXAmzTargetEnum;
}
export declare class ListPiiEntitiesDetectionJobsRequest extends SpeakeasyBase {
    headers: ListPiiEntitiesDetectionJobsHeaders;
    request: shared.ListPiiEntitiesDetectionJobsRequest;
}
export declare class ListPiiEntitiesDetectionJobsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidFilterException?: any;
    invalidRequestException?: any;
    listPiiEntitiesDetectionJobsResponse?: shared.ListPiiEntitiesDetectionJobsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
