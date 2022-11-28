import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateTopicRuleDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateTopicRuleDestinationRequestBodyStatusEnum {
    Enabled = "ENABLED",
    InProgress = "IN_PROGRESS",
    Disabled = "DISABLED",
    Error = "ERROR",
    Deleting = "DELETING"
}
export declare class UpdateTopicRuleDestinationRequestBody extends SpeakeasyBase {
    arn: string;
    status: UpdateTopicRuleDestinationRequestBodyStatusEnum;
}
export declare class UpdateTopicRuleDestinationRequest extends SpeakeasyBase {
    headers: UpdateTopicRuleDestinationHeaders;
    request: UpdateTopicRuleDestinationRequestBody;
}
export declare class UpdateTopicRuleDestinationResponse extends SpeakeasyBase {
    conflictingResourceUpdateException?: any;
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateTopicRuleDestinationResponse?: Map<string, any>;
}
