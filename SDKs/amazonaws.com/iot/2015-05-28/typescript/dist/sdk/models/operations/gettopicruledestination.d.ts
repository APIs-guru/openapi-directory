import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTopicRuleDestinationPathParams extends SpeakeasyBase {
    arn: string;
}
export declare class GetTopicRuleDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTopicRuleDestinationRequest extends SpeakeasyBase {
    pathParams: GetTopicRuleDestinationPathParams;
    headers: GetTopicRuleDestinationHeaders;
}
export declare class GetTopicRuleDestinationResponse extends SpeakeasyBase {
    contentType: string;
    getTopicRuleDestinationResponse?: shared.GetTopicRuleDestinationResponse;
    internalException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
