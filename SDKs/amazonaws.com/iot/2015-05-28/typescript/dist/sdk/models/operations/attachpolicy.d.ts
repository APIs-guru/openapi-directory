import { SpeakeasyBase } from "../../../internal/utils";
export declare class AttachPolicyPathParams extends SpeakeasyBase {
    policyName: string;
}
export declare class AttachPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AttachPolicyRequestBody extends SpeakeasyBase {
    target: string;
}
export declare class AttachPolicyRequest extends SpeakeasyBase {
    pathParams: AttachPolicyPathParams;
    headers: AttachPolicyHeaders;
    request: AttachPolicyRequestBody;
}
export declare class AttachPolicyResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
