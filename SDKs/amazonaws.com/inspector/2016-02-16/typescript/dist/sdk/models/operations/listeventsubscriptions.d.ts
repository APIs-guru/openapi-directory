import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEventSubscriptionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListEventSubscriptionsXAmzTargetEnum {
    InspectorServiceListEventSubscriptions = "InspectorService.ListEventSubscriptions"
}
export declare class ListEventSubscriptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEventSubscriptionsXAmzTargetEnum;
}
export declare class ListEventSubscriptionsRequest extends SpeakeasyBase {
    queryParams: ListEventSubscriptionsQueryParams;
    headers: ListEventSubscriptionsHeaders;
    request: shared.ListEventSubscriptionsRequest;
}
export declare class ListEventSubscriptionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    listEventSubscriptionsResponse?: shared.ListEventSubscriptionsResponse;
    noSuchEntityException?: any;
    statusCode: number;
}
