import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetComponentPolicyQueryParams extends SpeakeasyBase {
    componentArn: string;
}
export declare class GetComponentPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetComponentPolicyRequest extends SpeakeasyBase {
    queryParams: GetComponentPolicyQueryParams;
    headers: GetComponentPolicyHeaders;
}
export declare class GetComponentPolicyResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    contentType: string;
    forbiddenException?: any;
    getComponentPolicyResponse?: shared.GetComponentPolicyResponse;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
