import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteTopicRuleDestinationPathParams extends SpeakeasyBase {
    arn: string;
}
export declare class DeleteTopicRuleDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteTopicRuleDestinationRequest extends SpeakeasyBase {
    pathParams: DeleteTopicRuleDestinationPathParams;
    headers: DeleteTopicRuleDestinationHeaders;
}
export declare class DeleteTopicRuleDestinationResponse extends SpeakeasyBase {
    conflictingResourceUpdateException?: any;
    contentType: string;
    deleteTopicRuleDestinationResponse?: Map<string, any>;
    internalException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
