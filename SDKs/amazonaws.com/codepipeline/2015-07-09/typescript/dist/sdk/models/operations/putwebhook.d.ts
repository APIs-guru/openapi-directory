import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutWebhookXAmzTargetEnum {
    CodePipeline20150709PutWebhook = "CodePipeline_20150709.PutWebhook"
}
export declare class PutWebhookHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutWebhookXAmzTargetEnum;
}
export declare class PutWebhookRequest extends SpeakeasyBase {
    headers: PutWebhookHeaders;
    request: shared.PutWebhookInput;
}
export declare class PutWebhookResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    invalidTagsException?: any;
    invalidWebhookAuthenticationParametersException?: any;
    invalidWebhookFilterPatternException?: any;
    limitExceededException?: any;
    pipelineNotFoundException?: any;
    putWebhookOutput?: shared.PutWebhookOutput;
    statusCode: number;
    tooManyTagsException?: any;
    validationException?: any;
}
