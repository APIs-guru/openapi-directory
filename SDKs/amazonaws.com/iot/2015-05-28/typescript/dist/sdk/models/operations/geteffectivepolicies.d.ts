import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEffectivePoliciesQueryParams extends SpeakeasyBase {
    thingName?: string;
}
export declare class GetEffectivePoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEffectivePoliciesRequestBody extends SpeakeasyBase {
    cognitoIdentityPoolId?: string;
    principal?: string;
}
export declare class GetEffectivePoliciesRequest extends SpeakeasyBase {
    queryParams: GetEffectivePoliciesQueryParams;
    headers: GetEffectivePoliciesHeaders;
    request: GetEffectivePoliciesRequestBody;
}
export declare class GetEffectivePoliciesResponse extends SpeakeasyBase {
    contentType: string;
    getEffectivePoliciesResponse?: shared.GetEffectivePoliciesResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
