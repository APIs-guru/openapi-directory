import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutRegistryPolicyXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921PutRegistryPolicy = "AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy"
}
export declare class PutRegistryPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRegistryPolicyXAmzTargetEnum;
}
export declare class PutRegistryPolicyRequest extends SpeakeasyBase {
    headers: PutRegistryPolicyHeaders;
    request: shared.PutRegistryPolicyRequest;
}
export declare class PutRegistryPolicyResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    putRegistryPolicyResponse?: shared.PutRegistryPolicyResponse;
    serverException?: any;
    statusCode: number;
}
