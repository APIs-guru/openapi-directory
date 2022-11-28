import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteWebhookPathParams extends SpeakeasyBase {
    webhookId: string;
}
export declare class DeleteWebhookHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteWebhookRequest extends SpeakeasyBase {
    pathParams: DeleteWebhookPathParams;
    headers: DeleteWebhookHeaders;
}
export declare class DeleteWebhookResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteWebhookResult?: shared.DeleteWebhookResult;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
