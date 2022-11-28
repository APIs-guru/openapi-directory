import { SpeakeasyBase } from "../../../internal/utils";
export declare class DetachPrincipalPolicyPathParams extends SpeakeasyBase {
    policyName: string;
}
export declare class DetachPrincipalPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznIotPrincipal: string;
}
export declare class DetachPrincipalPolicyRequest extends SpeakeasyBase {
    pathParams: DetachPrincipalPolicyPathParams;
    headers: DetachPrincipalPolicyHeaders;
}
export declare class DetachPrincipalPolicyResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
