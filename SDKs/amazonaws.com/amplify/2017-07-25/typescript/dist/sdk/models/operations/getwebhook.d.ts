import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWebhookPathParams extends SpeakeasyBase {
    webhookId: string;
}
export declare class GetWebhookHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetWebhookRequest extends SpeakeasyBase {
    pathParams: GetWebhookPathParams;
    headers: GetWebhookHeaders;
}
export declare class GetWebhookResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getWebhookResult?: shared.GetWebhookResult;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
