import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutImageRecipePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutImageRecipePolicyRequestBody extends SpeakeasyBase {
    imageRecipeArn: string;
    policy: string;
}
export declare class PutImageRecipePolicyRequest extends SpeakeasyBase {
    headers: PutImageRecipePolicyHeaders;
    request: PutImageRecipePolicyRequestBody;
}
export declare class PutImageRecipePolicyResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    invalidParameterValueException?: any;
    invalidRequestException?: any;
    putImageRecipePolicyResponse?: shared.PutImageRecipePolicyResponse;
    resourceNotFoundException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
