import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRegistryPolicyXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921GetRegistryPolicy = "AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy"
}
export declare class GetRegistryPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRegistryPolicyXAmzTargetEnum;
}
export declare class GetRegistryPolicyRequest extends SpeakeasyBase {
    headers: GetRegistryPolicyHeaders;
    request: Map<string, any>;
}
export declare class GetRegistryPolicyResponse extends SpeakeasyBase {
    contentType: string;
    getRegistryPolicyResponse?: shared.GetRegistryPolicyResponse;
    invalidParameterException?: any;
    registryPolicyNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
