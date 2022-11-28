import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePolicyPathParams extends SpeakeasyBase {
    policyName: string;
}
export declare class CreatePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreatePolicyRequestBody extends SpeakeasyBase {
    policyDocument: string;
    tags?: shared.Tag[];
}
export declare class CreatePolicyRequest extends SpeakeasyBase {
    pathParams: CreatePolicyPathParams;
    headers: CreatePolicyHeaders;
    request: CreatePolicyRequestBody;
}
export declare class CreatePolicyResponse extends SpeakeasyBase {
    contentType: string;
    createPolicyResponse?: shared.CreatePolicyResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    malformedPolicyException?: any;
    resourceAlreadyExistsException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
