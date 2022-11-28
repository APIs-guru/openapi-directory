import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateWebhookXAmzTargetEnum {
    CodeBuild20161006UpdateWebhook = "CodeBuild_20161006.UpdateWebhook"
}
export declare class UpdateWebhookHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateWebhookXAmzTargetEnum;
}
export declare class UpdateWebhookRequest extends SpeakeasyBase {
    headers: UpdateWebhookHeaders;
    request: shared.UpdateWebhookInput;
}
export declare class UpdateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    oAuthProviderException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateWebhookOutput?: shared.UpdateWebhookOutput;
}
