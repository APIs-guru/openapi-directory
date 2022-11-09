import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateNotificationRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateNotificationRuleRequestBodyDetailTypeEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare enum CreateNotificationRuleRequestBodyStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class CreateNotificationRuleRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    detailType: CreateNotificationRuleRequestBodyDetailTypeEnum;
    eventTypeIds: string[];
    name: string;
    resource: string;
    status?: CreateNotificationRuleRequestBodyStatusEnum;
    tags?: Map<string, string>;
    targets: shared.Target[];
}
export declare class CreateNotificationRuleRequest extends SpeakeasyBase {
    headers: CreateNotificationRuleHeaders;
    request: CreateNotificationRuleRequestBody;
}
export declare class CreateNotificationRuleResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    concurrentModificationException?: any;
    configurationException?: any;
    contentType: string;
    createNotificationRuleResult?: shared.CreateNotificationRuleResult;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
    validationException?: any;
}
