import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SubscribeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Information about the SNS topics associated with a notification rule.
**/
export declare class SubscribeRequestBodyTarget extends SpeakeasyBase {
    targetAddress?: string;
    targetType?: string;
}
export declare class SubscribeRequestBody extends SpeakeasyBase {
    arn: string;
    clientRequestToken?: string;
    target: SubscribeRequestBodyTarget;
}
export declare class SubscribeRequest extends SpeakeasyBase {
    headers: SubscribeHeaders;
    request: SubscribeRequestBody;
}
export declare class SubscribeResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    subscribeResult?: shared.SubscribeResult;
    validationException?: any;
}
