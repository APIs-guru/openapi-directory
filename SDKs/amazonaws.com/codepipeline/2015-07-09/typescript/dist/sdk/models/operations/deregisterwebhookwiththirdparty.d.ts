import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterWebhookWithThirdPartyXAmzTargetEnum {
    CodePipeline20150709DeregisterWebhookWithThirdParty = "CodePipeline_20150709.DeregisterWebhookWithThirdParty"
}
export declare class DeregisterWebhookWithThirdPartyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterWebhookWithThirdPartyXAmzTargetEnum;
}
export declare class DeregisterWebhookWithThirdPartyRequest extends SpeakeasyBase {
    headers: DeregisterWebhookWithThirdPartyHeaders;
    request: shared.DeregisterWebhookWithThirdPartyInput;
}
export declare class DeregisterWebhookWithThirdPartyResponse extends SpeakeasyBase {
    contentType: string;
    deregisterWebhookWithThirdPartyOutput?: Map<string, any>;
    statusCode: number;
    validationException?: any;
    webhookNotFoundException?: any;
}
