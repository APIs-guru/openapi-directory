import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListJobRunsPathParams extends SpeakeasyBase {
    virtualClusterId: string;
}
export declare class ListJobRunsQueryParams extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    maxResults?: number;
    name?: string;
    nextToken?: string;
    states?: shared.JobRunStateEnum[];
}
export declare class ListJobRunsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListJobRunsRequest extends SpeakeasyBase {
    pathParams: ListJobRunsPathParams;
    queryParams: ListJobRunsQueryParams;
    headers: ListJobRunsHeaders;
}
export declare class ListJobRunsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listJobRunsResponse?: shared.ListJobRunsResponse;
    statusCode: number;
    validationException?: any;
}
