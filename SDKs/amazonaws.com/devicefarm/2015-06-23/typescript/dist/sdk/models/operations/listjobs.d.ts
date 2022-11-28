import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListJobsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListJobsXAmzTargetEnum {
    DeviceFarm20150623ListJobs = "DeviceFarm_20150623.ListJobs"
}
export declare class ListJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListJobsXAmzTargetEnum;
}
export declare class ListJobsRequest extends SpeakeasyBase {
    queryParams: ListJobsQueryParams;
    headers: ListJobsHeaders;
    request: shared.ListJobsRequest;
}
export declare class ListJobsResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    listJobsResult?: shared.ListJobsResult;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
