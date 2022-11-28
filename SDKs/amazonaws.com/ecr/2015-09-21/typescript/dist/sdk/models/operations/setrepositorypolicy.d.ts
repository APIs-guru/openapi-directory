import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SetRepositoryPolicyXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921SetRepositoryPolicy = "AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy"
}
export declare class SetRepositoryPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetRepositoryPolicyXAmzTargetEnum;
}
export declare class SetRepositoryPolicyRequest extends SpeakeasyBase {
    headers: SetRepositoryPolicyHeaders;
    request: shared.SetRepositoryPolicyRequest;
}
export declare class SetRepositoryPolicyResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    setRepositoryPolicyResponse?: shared.SetRepositoryPolicyResponse;
    statusCode: number;
}
