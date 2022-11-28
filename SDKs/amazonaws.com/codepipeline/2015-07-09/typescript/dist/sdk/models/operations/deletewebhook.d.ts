import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteWebhookXAmzTargetEnum {
    CodePipeline20150709DeleteWebhook = "CodePipeline_20150709.DeleteWebhook"
}
export declare class DeleteWebhookHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWebhookXAmzTargetEnum;
}
export declare class DeleteWebhookRequest extends SpeakeasyBase {
    headers: DeleteWebhookHeaders;
    request: shared.DeleteWebhookInput;
}
export declare class DeleteWebhookResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteWebhookOutput?: Map<string, any>;
    statusCode: number;
    validationException?: any;
}
