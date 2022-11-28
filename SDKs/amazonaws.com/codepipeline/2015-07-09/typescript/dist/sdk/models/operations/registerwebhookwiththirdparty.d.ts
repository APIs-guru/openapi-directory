import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterWebhookWithThirdPartyXAmzTargetEnum {
    CodePipeline20150709RegisterWebhookWithThirdParty = "CodePipeline_20150709.RegisterWebhookWithThirdParty"
}
export declare class RegisterWebhookWithThirdPartyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterWebhookWithThirdPartyXAmzTargetEnum;
}
export declare class RegisterWebhookWithThirdPartyRequest extends SpeakeasyBase {
    headers: RegisterWebhookWithThirdPartyHeaders;
    request: shared.RegisterWebhookWithThirdPartyInput;
}
export declare class RegisterWebhookWithThirdPartyResponse extends SpeakeasyBase {
    contentType: string;
    registerWebhookWithThirdPartyOutput?: Map<string, any>;
    statusCode: number;
    validationException?: any;
    webhookNotFoundException?: any;
}
