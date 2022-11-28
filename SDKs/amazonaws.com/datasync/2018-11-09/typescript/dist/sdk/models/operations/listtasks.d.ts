import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTasksQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTasksXAmzTargetEnum {
    FmrsServiceListTasks = "FmrsService.ListTasks"
}
export declare class ListTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTasksXAmzTargetEnum;
}
export declare class ListTasksRequest extends SpeakeasyBase {
    queryParams: ListTasksQueryParams;
    headers: ListTasksHeaders;
    request: shared.ListTasksRequest;
}
export declare class ListTasksResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    listTasksResponse?: shared.ListTasksResponse;
    statusCode: number;
}
