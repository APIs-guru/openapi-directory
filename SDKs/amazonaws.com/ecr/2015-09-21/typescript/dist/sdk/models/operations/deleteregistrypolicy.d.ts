import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteRegistryPolicyXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921DeleteRegistryPolicy = "AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy"
}
export declare class DeleteRegistryPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRegistryPolicyXAmzTargetEnum;
}
export declare class DeleteRegistryPolicyRequest extends SpeakeasyBase {
    headers: DeleteRegistryPolicyHeaders;
    request: Map<string, any>;
}
export declare class DeleteRegistryPolicyResponse extends SpeakeasyBase {
    contentType: string;
    deleteRegistryPolicyResponse?: shared.DeleteRegistryPolicyResponse;
    invalidParameterException?: any;
    registryPolicyNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
