import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSubscriptionDefinitionVersionPathParams extends SpeakeasyBase {
    subscriptionDefinitionId: string;
}
export declare class CreateSubscriptionDefinitionVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznClientToken?: string;
}
export declare class CreateSubscriptionDefinitionVersionRequestBody extends SpeakeasyBase {
    subscriptions?: shared.Subscription[];
}
export declare class CreateSubscriptionDefinitionVersionRequest extends SpeakeasyBase {
    pathParams: CreateSubscriptionDefinitionVersionPathParams;
    headers: CreateSubscriptionDefinitionVersionHeaders;
    request: CreateSubscriptionDefinitionVersionRequestBody;
}
export declare class CreateSubscriptionDefinitionVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createSubscriptionDefinitionVersionResponse?: shared.CreateSubscriptionDefinitionVersionResponse;
    statusCode: number;
}
