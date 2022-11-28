import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPolicyVersionsPathParams extends SpeakeasyBase {
    policyName: string;
}
export declare class ListPolicyVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPolicyVersionsRequest extends SpeakeasyBase {
    pathParams: ListPolicyVersionsPathParams;
    headers: ListPolicyVersionsHeaders;
}
export declare class ListPolicyVersionsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listPolicyVersionsResponse?: shared.ListPolicyVersionsResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
