import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateWebhookXAmzTargetEnum {
    CodeBuild20161006CreateWebhook = "CodeBuild_20161006.CreateWebhook"
}
export declare class CreateWebhookHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWebhookXAmzTargetEnum;
}
export declare class CreateWebhookRequest extends SpeakeasyBase {
    headers: CreateWebhookHeaders;
    request: shared.CreateWebhookInput;
}
export declare class CreateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    createWebhookOutput?: shared.CreateWebhookOutput;
    invalidInputException?: any;
    oAuthProviderException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
