import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePolicyVersionPathParams extends SpeakeasyBase {
    policyName: string;
}
export declare class CreatePolicyVersionQueryParams extends SpeakeasyBase {
    setAsDefault?: boolean;
}
export declare class CreatePolicyVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreatePolicyVersionRequestBody extends SpeakeasyBase {
    policyDocument: string;
}
export declare class CreatePolicyVersionRequest extends SpeakeasyBase {
    pathParams: CreatePolicyVersionPathParams;
    queryParams: CreatePolicyVersionQueryParams;
    headers: CreatePolicyVersionHeaders;
    request: CreatePolicyVersionRequestBody;
}
export declare class CreatePolicyVersionResponse extends SpeakeasyBase {
    contentType: string;
    createPolicyVersionResponse?: shared.CreatePolicyVersionResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    malformedPolicyException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
    versionsLimitExceededException?: any;
}
