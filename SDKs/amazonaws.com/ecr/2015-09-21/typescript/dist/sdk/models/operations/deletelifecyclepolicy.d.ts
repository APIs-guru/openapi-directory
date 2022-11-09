import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteLifecyclePolicyXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921DeleteLifecyclePolicy = "AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy"
}
export declare class DeleteLifecyclePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLifecyclePolicyXAmzTargetEnum;
}
export declare class DeleteLifecyclePolicyRequest extends SpeakeasyBase {
    headers: DeleteLifecyclePolicyHeaders;
    request: shared.DeleteLifecyclePolicyRequest;
}
export declare class DeleteLifecyclePolicyResponse extends SpeakeasyBase {
    contentType: string;
    deleteLifecyclePolicyResponse?: shared.DeleteLifecyclePolicyResponse;
    invalidParameterException?: any;
    lifecyclePolicyNotFoundException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
