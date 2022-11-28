import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateClusterXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateCluster = "AmazonEC2ContainerServiceV20141113.UpdateCluster"
}
export declare class UpdateClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateClusterXAmzTargetEnum;
}
export declare class UpdateClusterRequest extends SpeakeasyBase {
    headers: UpdateClusterHeaders;
    request: shared.UpdateClusterRequest;
}
export declare class UpdateClusterResponse extends SpeakeasyBase {
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
    updateClusterResponse?: shared.UpdateClusterResponse;
}
