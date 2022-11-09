import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListJobsPathParams extends SpeakeasyBase {
    appId: string;
    branchName: string;
}
export declare class ListJobsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListJobsRequest extends SpeakeasyBase {
    pathParams: ListJobsPathParams;
    queryParams: ListJobsQueryParams;
    headers: ListJobsHeaders;
}
export declare class ListJobsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    listJobsResult?: shared.ListJobsResult;
    statusCode: number;
    unauthorizedException?: any;
}
