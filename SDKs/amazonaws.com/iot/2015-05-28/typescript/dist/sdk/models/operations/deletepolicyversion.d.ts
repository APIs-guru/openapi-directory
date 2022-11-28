import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePolicyVersionPathParams extends SpeakeasyBase {
    policyName: string;
    policyVersionId: string;
}
export declare class DeletePolicyVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeletePolicyVersionRequest extends SpeakeasyBase {
    pathParams: DeletePolicyVersionPathParams;
    headers: DeletePolicyVersionHeaders;
}
export declare class DeletePolicyVersionResponse extends SpeakeasyBase {
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
