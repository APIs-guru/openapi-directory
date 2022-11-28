import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteTopicRulePathParams extends SpeakeasyBase {
    ruleName: string;
}
export declare class DeleteTopicRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteTopicRuleRequest extends SpeakeasyBase {
    pathParams: DeleteTopicRulePathParams;
    headers: DeleteTopicRuleHeaders;
}
export declare class DeleteTopicRuleResponse extends SpeakeasyBase {
    conflictingResourceUpdateException?: any;
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
