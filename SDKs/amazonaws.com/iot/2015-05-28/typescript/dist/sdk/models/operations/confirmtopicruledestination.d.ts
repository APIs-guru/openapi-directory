import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConfirmTopicRuleDestinationPathParams extends SpeakeasyBase {
    confirmationToken: string;
}
export declare class ConfirmTopicRuleDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ConfirmTopicRuleDestinationRequest extends SpeakeasyBase {
    pathParams: ConfirmTopicRuleDestinationPathParams;
    headers: ConfirmTopicRuleDestinationHeaders;
}
export declare class ConfirmTopicRuleDestinationResponse extends SpeakeasyBase {
    confirmTopicRuleDestinationResponse?: Map<string, any>;
    conflictingResourceUpdateException?: any;
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
