import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateWebhookPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class CreateWebhookHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateWebhookRequestBody extends SpeakeasyBase {
    branchName: string;
    description?: string;
}
export declare class CreateWebhookRequest extends SpeakeasyBase {
    pathParams: CreateWebhookPathParams;
    headers: CreateWebhookHeaders;
    request: CreateWebhookRequestBody;
}
export declare class CreateWebhookResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createWebhookResult?: shared.CreateWebhookResult;
    dependentServiceFailureException?: any;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
