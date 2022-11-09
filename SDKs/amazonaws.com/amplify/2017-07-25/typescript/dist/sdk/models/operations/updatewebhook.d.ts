import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateWebhookPathParams extends SpeakeasyBase {
    webhookId: string;
}
export declare class UpdateWebhookHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateWebhookRequestBody extends SpeakeasyBase {
    branchName?: string;
    description?: string;
}
export declare class UpdateWebhookRequest extends SpeakeasyBase {
    pathParams: UpdateWebhookPathParams;
    headers: UpdateWebhookHeaders;
    request: UpdateWebhookRequestBody;
}
export declare class UpdateWebhookResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    dependentServiceFailureException?: any;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
    updateWebhookResult?: shared.UpdateWebhookResult;
}
