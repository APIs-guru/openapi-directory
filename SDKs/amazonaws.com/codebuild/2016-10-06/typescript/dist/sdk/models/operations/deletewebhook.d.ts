import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteWebhookXAmzTargetEnum {
    CodeBuild20161006DeleteWebhook = "CodeBuild_20161006.DeleteWebhook"
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
    contentType: string;
    deleteWebhookOutput?: Map<string, any>;
    invalidInputException?: any;
    oAuthProviderException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
