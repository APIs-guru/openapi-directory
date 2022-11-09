import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutComponentPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutComponentPolicyRequestBody extends SpeakeasyBase {
    componentArn: string;
    policy: string;
}
export declare class PutComponentPolicyRequest extends SpeakeasyBase {
    headers: PutComponentPolicyHeaders;
    request: PutComponentPolicyRequestBody;
}
export declare class PutComponentPolicyResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    invalidParameterValueException?: any;
    invalidRequestException?: any;
    putComponentPolicyResponse?: shared.PutComponentPolicyResponse;
    resourceNotFoundException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
