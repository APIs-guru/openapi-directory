import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListActiveViolationsBehaviorCriteriaTypeEnum {
    Static = "STATIC",
    Statistical = "STATISTICAL",
    MachineLearning = "MACHINE_LEARNING"
}
export declare class ListActiveViolationsQueryParams extends SpeakeasyBase {
    behaviorCriteriaType?: ListActiveViolationsBehaviorCriteriaTypeEnum;
    listSuppressedAlerts?: boolean;
    maxResults?: number;
    nextToken?: string;
    securityProfileName?: string;
    thingName?: string;
}
export declare class ListActiveViolationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListActiveViolationsRequest extends SpeakeasyBase {
    queryParams: ListActiveViolationsQueryParams;
    headers: ListActiveViolationsHeaders;
}
export declare class ListActiveViolationsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listActiveViolationsResponse?: shared.ListActiveViolationsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
