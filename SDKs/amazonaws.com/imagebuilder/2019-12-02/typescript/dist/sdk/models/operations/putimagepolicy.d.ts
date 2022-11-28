import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutImagePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutImagePolicyRequestBody extends SpeakeasyBase {
    imageArn: string;
    policy: string;
}
export declare class PutImagePolicyRequest extends SpeakeasyBase {
    headers: PutImagePolicyHeaders;
    request: PutImagePolicyRequestBody;
}
export declare class PutImagePolicyResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    invalidParameterValueException?: any;
    invalidRequestException?: any;
    putImagePolicyResponse?: shared.PutImagePolicyResponse;
    resourceNotFoundException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
