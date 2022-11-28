import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDetectMitigationActionsTasksQueryParams extends SpeakeasyBase {
    endTime: Date;
    maxResults?: number;
    nextToken?: string;
    startTime: Date;
}
export declare class ListDetectMitigationActionsTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDetectMitigationActionsTasksRequest extends SpeakeasyBase {
    queryParams: ListDetectMitigationActionsTasksQueryParams;
    headers: ListDetectMitigationActionsTasksHeaders;
}
export declare class ListDetectMitigationActionsTasksResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listDetectMitigationActionsTasksResponse?: shared.ListDetectMitigationActionsTasksResponse;
    statusCode: number;
    throttlingException?: any;
}
