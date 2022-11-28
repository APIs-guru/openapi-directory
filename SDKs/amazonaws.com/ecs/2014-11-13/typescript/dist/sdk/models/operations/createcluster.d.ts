import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateClusterXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113CreateCluster = "AmazonEC2ContainerServiceV20141113.CreateCluster"
}
export declare class CreateClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateClusterXAmzTargetEnum;
}
export declare class CreateClusterRequest extends SpeakeasyBase {
    headers: CreateClusterHeaders;
    request: shared.CreateClusterRequest;
}
export declare class CreateClusterResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    createClusterResponse?: shared.CreateClusterResponse;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
}
