import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateContainerInstancesStateXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateContainerInstancesState = "AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState"
}
export declare class UpdateContainerInstancesStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateContainerInstancesStateXAmzTargetEnum;
}
export declare class UpdateContainerInstancesStateRequest extends SpeakeasyBase {
    headers: UpdateContainerInstancesStateHeaders;
    request: shared.UpdateContainerInstancesStateRequest;
}
export declare class UpdateContainerInstancesStateResponse extends SpeakeasyBase {
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
    updateContainerInstancesStateResponse?: shared.UpdateContainerInstancesStateResponse;
}
