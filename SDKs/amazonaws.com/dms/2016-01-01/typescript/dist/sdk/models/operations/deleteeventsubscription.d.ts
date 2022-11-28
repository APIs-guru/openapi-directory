import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteEventSubscriptionXAmzTargetEnum {
    AmazonDmSv20160101DeleteEventSubscription = "AmazonDMSv20160101.DeleteEventSubscription"
}
export declare class DeleteEventSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEventSubscriptionXAmzTargetEnum;
}
export declare class DeleteEventSubscriptionRequest extends SpeakeasyBase {
    headers: DeleteEventSubscriptionHeaders;
    request: shared.DeleteEventSubscriptionMessage;
}
export declare class DeleteEventSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    deleteEventSubscriptionResponse?: shared.DeleteEventSubscriptionResponse;
    invalidResourceStateFault?: any;
    resourceNotFoundFault?: any;
    statusCode: number;
}
