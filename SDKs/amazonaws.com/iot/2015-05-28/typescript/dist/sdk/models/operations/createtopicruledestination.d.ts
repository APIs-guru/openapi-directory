import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTopicRuleDestinationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Configuration of the topic rule destination.
**/
export declare class CreateTopicRuleDestinationRequestBodyDestinationConfiguration extends SpeakeasyBase {
    httpUrlConfiguration?: shared.HttpUrlDestinationConfiguration;
    vpcConfiguration?: shared.VpcDestinationConfiguration;
}
export declare class CreateTopicRuleDestinationRequestBody extends SpeakeasyBase {
    destinationConfiguration: CreateTopicRuleDestinationRequestBodyDestinationConfiguration;
}
export declare class CreateTopicRuleDestinationRequest extends SpeakeasyBase {
    headers: CreateTopicRuleDestinationHeaders;
    request: CreateTopicRuleDestinationRequestBody;
}
export declare class CreateTopicRuleDestinationResponse extends SpeakeasyBase {
    conflictingResourceUpdateException?: any;
    contentType: string;
    createTopicRuleDestinationResponse?: shared.CreateTopicRuleDestinationResponse;
    internalException?: any;
    invalidRequestException?: any;
    resourceAlreadyExistsException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
