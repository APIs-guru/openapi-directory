import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGeneratedPolicyPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetGeneratedPolicyQueryParams extends SpeakeasyBase {
    includeResourcePlaceholders?: boolean;
    includeServiceLevelTemplate?: boolean;
}
export declare class GetGeneratedPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGeneratedPolicyRequest extends SpeakeasyBase {
    pathParams: GetGeneratedPolicyPathParams;
    queryParams: GetGeneratedPolicyQueryParams;
    headers: GetGeneratedPolicyHeaders;
}
export declare class GetGeneratedPolicyResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getGeneratedPolicyResponse?: shared.GetGeneratedPolicyResponse;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
