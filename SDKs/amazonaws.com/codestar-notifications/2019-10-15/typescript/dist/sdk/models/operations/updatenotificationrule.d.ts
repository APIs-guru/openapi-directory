import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateNotificationRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateNotificationRuleRequestBodyDetailTypeEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare enum UpdateNotificationRuleRequestBodyStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class UpdateNotificationRuleRequestBody extends SpeakeasyBase {
    arn: string;
    detailType?: UpdateNotificationRuleRequestBodyDetailTypeEnum;
    eventTypeIds?: string[];
    name?: string;
    status?: UpdateNotificationRuleRequestBodyStatusEnum;
    targets?: shared.Target[];
}
export declare class UpdateNotificationRuleRequest extends SpeakeasyBase {
    headers: UpdateNotificationRuleHeaders;
    request: UpdateNotificationRuleRequestBody;
}
export declare class UpdateNotificationRuleResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    updateNotificationRuleResult?: Map<string, any>;
    validationException?: any;
}
