import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetLifecyclePolicyXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921GetLifecyclePolicy = "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy"
}
export declare class GetLifecyclePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLifecyclePolicyXAmzTargetEnum;
}
export declare class GetLifecyclePolicyRequest extends SpeakeasyBase {
    headers: GetLifecyclePolicyHeaders;
    request: shared.GetLifecyclePolicyRequest;
}
export declare class GetLifecyclePolicyResponse extends SpeakeasyBase {
    contentType: string;
    getLifecyclePolicyResponse?: shared.GetLifecyclePolicyResponse;
    invalidParameterException?: any;
    lifecyclePolicyNotFoundException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
