import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutContainerRecipePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutContainerRecipePolicyRequestBody extends SpeakeasyBase {
    containerRecipeArn: string;
    policy: string;
}
export declare class PutContainerRecipePolicyRequest extends SpeakeasyBase {
    headers: PutContainerRecipePolicyHeaders;
    request: PutContainerRecipePolicyRequestBody;
}
export declare class PutContainerRecipePolicyResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    invalidParameterValueException?: any;
    invalidRequestException?: any;
    putContainerRecipePolicyResponse?: shared.PutContainerRecipePolicyResponse;
    resourceNotFoundException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
