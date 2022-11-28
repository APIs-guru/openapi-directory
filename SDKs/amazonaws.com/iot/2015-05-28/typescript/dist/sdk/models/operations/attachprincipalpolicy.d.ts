import { SpeakeasyBase } from "../../../internal/utils";
export declare class AttachPrincipalPolicyPathParams extends SpeakeasyBase {
    policyName: string;
}
export declare class AttachPrincipalPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznIotPrincipal: string;
}
export declare class AttachPrincipalPolicyRequest extends SpeakeasyBase {
    pathParams: AttachPrincipalPolicyPathParams;
    headers: AttachPrincipalPolicyHeaders;
}
export declare class AttachPrincipalPolicyResponse extends SpeakeasyBase {
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
