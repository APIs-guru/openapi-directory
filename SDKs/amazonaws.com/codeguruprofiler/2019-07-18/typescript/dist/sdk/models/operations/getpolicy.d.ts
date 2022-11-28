import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPolicyPathParams extends SpeakeasyBase {
    profilingGroupName: string;
}
export declare class GetPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPolicyRequest extends SpeakeasyBase {
    pathParams: GetPolicyPathParams;
    headers: GetPolicyHeaders;
}
export declare class GetPolicyResponse extends SpeakeasyBase {
    contentType: string;
    getPolicyResponse?: shared.GetPolicyResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
