import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLifecyclePolicyPathParams extends SpeakeasyBase {
    policyId: string;
}
export declare class GetLifecyclePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLifecyclePolicyRequest extends SpeakeasyBase {
    pathParams: GetLifecyclePolicyPathParams;
    headers: GetLifecyclePolicyHeaders;
}
export declare class GetLifecyclePolicyResponse extends SpeakeasyBase {
    contentType: string;
    getLifecyclePolicyResponse?: shared.GetLifecyclePolicyResponse;
    internalServerException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
