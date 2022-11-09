import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutLifecyclePolicyXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921PutLifecyclePolicy = "AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy"
}
export declare class PutLifecyclePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutLifecyclePolicyXAmzTargetEnum;
}
export declare class PutLifecyclePolicyRequest extends SpeakeasyBase {
    headers: PutLifecyclePolicyHeaders;
    request: shared.PutLifecyclePolicyRequest;
}
export declare class PutLifecyclePolicyResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    putLifecyclePolicyResponse?: shared.PutLifecyclePolicyResponse;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
