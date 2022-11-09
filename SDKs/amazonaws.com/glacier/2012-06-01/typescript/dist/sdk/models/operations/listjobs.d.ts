import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListJobsPathParams extends SpeakeasyBase {
    accountId: string;
    vaultName: string;
}
export declare class ListJobsQueryParams extends SpeakeasyBase {
    completed?: string;
    limit?: string;
    marker?: string;
    statuscode?: string;
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
    contentType: string;
    invalidParameterValueException?: any;
    listJobsOutput?: shared.ListJobsOutput;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
