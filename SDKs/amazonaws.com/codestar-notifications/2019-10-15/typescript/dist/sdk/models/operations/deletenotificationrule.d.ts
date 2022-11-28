import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteNotificationRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteNotificationRuleRequestBody extends SpeakeasyBase {
    arn: string;
}
export declare class DeleteNotificationRuleRequest extends SpeakeasyBase {
    headers: DeleteNotificationRuleHeaders;
    request: DeleteNotificationRuleRequestBody;
}
export declare class DeleteNotificationRuleResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteNotificationRuleResult?: shared.DeleteNotificationRuleResult;
    limitExceededException?: any;
    statusCode: number;
    validationException?: any;
}
