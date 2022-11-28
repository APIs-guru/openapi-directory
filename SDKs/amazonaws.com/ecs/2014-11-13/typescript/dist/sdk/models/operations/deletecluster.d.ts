import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteClusterXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeleteCluster = "AmazonEC2ContainerServiceV20141113.DeleteCluster"
}
export declare class DeleteClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteClusterXAmzTargetEnum;
}
export declare class DeleteClusterRequest extends SpeakeasyBase {
    headers: DeleteClusterHeaders;
    request: shared.DeleteClusterRequest;
}
export declare class DeleteClusterResponse extends SpeakeasyBase {
    clientException?: any;
    clusterContainsContainerInstancesException?: any;
    clusterContainsServicesException?: any;
    clusterContainsTasksException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    deleteClusterResponse?: shared.DeleteClusterResponse;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
    updateInProgressException?: any;
}
