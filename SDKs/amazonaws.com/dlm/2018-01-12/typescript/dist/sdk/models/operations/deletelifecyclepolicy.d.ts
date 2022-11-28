import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteLifecyclePolicyPathParams extends SpeakeasyBase {
    policyId: string;
}
export declare class DeleteLifecyclePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteLifecyclePolicyRequest extends SpeakeasyBase {
    pathParams: DeleteLifecyclePolicyPathParams;
    headers: DeleteLifecyclePolicyHeaders;
}
export declare class DeleteLifecyclePolicyResponse extends SpeakeasyBase {
    contentType: string;
    deleteLifecyclePolicyResponse?: Map<string, any>;
    internalServerException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
