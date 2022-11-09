import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateSubscriptionDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznClientToken?: string;
}
/**
 * Information about a subscription definition version.
**/
export declare class CreateSubscriptionDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
    subscriptions?: shared.Subscription[];
}
export declare class CreateSubscriptionDefinitionRequestBody extends SpeakeasyBase {
    initialVersion?: CreateSubscriptionDefinitionRequestBodyInitialVersion;
    name?: string;
    tags?: Map<string, string>;
}
export declare class CreateSubscriptionDefinitionRequest extends SpeakeasyBase {
    headers: CreateSubscriptionDefinitionHeaders;
    request: CreateSubscriptionDefinitionRequestBody;
}
export declare class CreateSubscriptionDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createSubscriptionDefinitionResponse?: shared.CreateSubscriptionDefinitionResponse;
    statusCode: number;
}
