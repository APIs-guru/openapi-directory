import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPolicyVersionPathParams extends SpeakeasyBase {
    policyName: string;
    policyVersionId: string;
}
export declare class GetPolicyVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPolicyVersionRequest extends SpeakeasyBase {
    pathParams: GetPolicyVersionPathParams;
    headers: GetPolicyVersionHeaders;
}
export declare class GetPolicyVersionResponse extends SpeakeasyBase {
    contentType: string;
    getPolicyVersionResponse?: shared.GetPolicyVersionResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
