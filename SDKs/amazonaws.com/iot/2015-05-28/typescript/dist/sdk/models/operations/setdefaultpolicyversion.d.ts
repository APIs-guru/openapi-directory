import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetDefaultPolicyVersionPathParams extends SpeakeasyBase {
    policyName: string;
    policyVersionId: string;
}
export declare class SetDefaultPolicyVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SetDefaultPolicyVersionRequest extends SpeakeasyBase {
    pathParams: SetDefaultPolicyVersionPathParams;
    headers: SetDefaultPolicyVersionHeaders;
}
export declare class SetDefaultPolicyVersionResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
