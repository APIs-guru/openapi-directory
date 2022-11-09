import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ModifyEventSubscriptionXAmzTargetEnum {
    AmazonDmSv20160101ModifyEventSubscription = "AmazonDMSv20160101.ModifyEventSubscription"
}
export declare class ModifyEventSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyEventSubscriptionXAmzTargetEnum;
}
export declare class ModifyEventSubscriptionRequest extends SpeakeasyBase {
    headers: ModifyEventSubscriptionHeaders;
    request: shared.ModifyEventSubscriptionMessage;
}
export declare class ModifyEventSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    kmsAccessDeniedFault?: any;
    kmsDisabledFault?: any;
    kmsInvalidStateFault?: any;
    kmsNotFoundFault?: any;
    kmsThrottlingFault?: any;
    modifyEventSubscriptionResponse?: shared.ModifyEventSubscriptionResponse;
    resourceNotFoundFault?: any;
    resourceQuotaExceededFault?: any;
    snsInvalidTopicFault?: any;
    snsNoAuthorizationFault?: any;
    statusCode: number;
}
