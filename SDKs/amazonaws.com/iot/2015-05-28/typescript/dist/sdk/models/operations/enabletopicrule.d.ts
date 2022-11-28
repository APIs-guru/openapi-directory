import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnableTopicRulePathParams extends SpeakeasyBase {
    ruleName: string;
}
export declare class EnableTopicRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class EnableTopicRuleRequest extends SpeakeasyBase {
    pathParams: EnableTopicRulePathParams;
    headers: EnableTopicRuleHeaders;
}
export declare class EnableTopicRuleResponse extends SpeakeasyBase {
    conflictingResourceUpdateException?: any;
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
