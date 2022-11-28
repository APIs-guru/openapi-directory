import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePolicyPathParams extends SpeakeasyBase {
    policyName: string;
}
export declare class DeletePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeletePolicyRequest extends SpeakeasyBase {
    pathParams: DeletePolicyPathParams;
    headers: DeletePolicyHeaders;
}
export declare class DeletePolicyResponse extends SpeakeasyBase {
    contentType: string;
    deleteConflictException?: any;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
