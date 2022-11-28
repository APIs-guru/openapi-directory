import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterContainerInstanceXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeregisterContainerInstance = "AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance"
}
export declare class DeregisterContainerInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterContainerInstanceXAmzTargetEnum;
}
export declare class DeregisterContainerInstanceRequest extends SpeakeasyBase {
    headers: DeregisterContainerInstanceHeaders;
    request: shared.DeregisterContainerInstanceRequest;
}
export declare class DeregisterContainerInstanceResponse extends SpeakeasyBase {
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    deregisterContainerInstanceResponse?: shared.DeregisterContainerInstanceResponse;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
}
