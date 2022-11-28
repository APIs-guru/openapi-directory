import { SpeakeasyBase } from "../../../internal/utils";
export declare class CancelPolicyGenerationPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class CancelPolicyGenerationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelPolicyGenerationRequest extends SpeakeasyBase {
    pathParams: CancelPolicyGenerationPathParams;
    headers: CancelPolicyGenerationHeaders;
}
export declare class CancelPolicyGenerationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    cancelPolicyGenerationResponse?: Map<string, any>;
    contentType: string;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
