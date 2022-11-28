import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisableTopicRulePathParams extends SpeakeasyBase {
    ruleName: string;
}
export declare class DisableTopicRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisableTopicRuleRequest extends SpeakeasyBase {
    pathParams: DisableTopicRulePathParams;
    headers: DisableTopicRuleHeaders;
}
export declare class DisableTopicRuleResponse extends SpeakeasyBase {
    conflictingResourceUpdateException?: any;
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
