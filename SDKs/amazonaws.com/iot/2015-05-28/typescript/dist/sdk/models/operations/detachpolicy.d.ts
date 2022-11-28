import { SpeakeasyBase } from "../../../internal/utils";
export declare class DetachPolicyPathParams extends SpeakeasyBase {
    policyName: string;
}
export declare class DetachPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DetachPolicyRequestBody extends SpeakeasyBase {
    target: string;
}
export declare class DetachPolicyRequest extends SpeakeasyBase {
    pathParams: DetachPolicyPathParams;
    headers: DetachPolicyHeaders;
    request: DetachPolicyRequestBody;
}
export declare class DetachPolicyResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
