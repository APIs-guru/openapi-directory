import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListViolationEventsBehaviorCriteriaTypeEnum {
    Static = "STATIC",
    Statistical = "STATISTICAL",
    MachineLearning = "MACHINE_LEARNING"
}
export declare class ListViolationEventsQueryParams extends SpeakeasyBase {
    behaviorCriteriaType?: ListViolationEventsBehaviorCriteriaTypeEnum;
    endTime: Date;
    listSuppressedAlerts?: boolean;
    maxResults?: number;
    nextToken?: string;
    securityProfileName?: string;
    startTime: Date;
    thingName?: string;
}
export declare class ListViolationEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListViolationEventsRequest extends SpeakeasyBase {
    queryParams: ListViolationEventsQueryParams;
    headers: ListViolationEventsHeaders;
}
export declare class ListViolationEventsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listViolationEventsResponse?: shared.ListViolationEventsResponse;
    statusCode: number;
    throttlingException?: any;
}
