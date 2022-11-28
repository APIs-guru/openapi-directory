import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateEventSubscriptionXAmzTargetEnum {
    AmazonDmSv20160101CreateEventSubscription = "AmazonDMSv20160101.CreateEventSubscription"
}
export declare class CreateEventSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEventSubscriptionXAmzTargetEnum;
}
export declare class CreateEventSubscriptionRequest extends SpeakeasyBase {
    headers: CreateEventSubscriptionHeaders;
    request: shared.CreateEventSubscriptionMessage;
}
export declare class CreateEventSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    createEventSubscriptionResponse?: shared.CreateEventSubscriptionResponse;
    kmsAccessDeniedFault?: any;
    kmsDisabledFault?: any;
    kmsInvalidStateFault?: any;
    kmsNotFoundFault?: any;
    kmsThrottlingFault?: any;
    resourceAlreadyExistsFault?: any;
    resourceNotFoundFault?: any;
    resourceQuotaExceededFault?: any;
    snsInvalidTopicFault?: any;
    snsNoAuthorizationFault?: any;
    statusCode: number;
}
