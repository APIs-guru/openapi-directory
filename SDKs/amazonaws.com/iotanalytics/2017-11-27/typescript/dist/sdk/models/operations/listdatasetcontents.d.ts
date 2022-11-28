import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDatasetContentsPathParams extends SpeakeasyBase {
    datasetName: string;
}
export declare class ListDatasetContentsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    scheduledBefore?: Date;
    scheduledOnOrAfter?: Date;
}
export declare class ListDatasetContentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDatasetContentsRequest extends SpeakeasyBase {
    pathParams: ListDatasetContentsPathParams;
    queryParams: ListDatasetContentsQueryParams;
    headers: ListDatasetContentsHeaders;
}
export declare class ListDatasetContentsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listDatasetContentsResponse?: shared.ListDatasetContentsResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
