import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListThingRegistrationTasksStatusEnum {
    InProgress = "InProgress",
    Completed = "Completed",
    Failed = "Failed",
    Cancelled = "Cancelled",
    Cancelling = "Cancelling"
}
export declare class ListThingRegistrationTasksQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    status?: ListThingRegistrationTasksStatusEnum;
}
export declare class ListThingRegistrationTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListThingRegistrationTasksRequest extends SpeakeasyBase {
    queryParams: ListThingRegistrationTasksQueryParams;
    headers: ListThingRegistrationTasksHeaders;
}
export declare class ListThingRegistrationTasksResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listThingRegistrationTasksResponse?: shared.ListThingRegistrationTasksResponse;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
