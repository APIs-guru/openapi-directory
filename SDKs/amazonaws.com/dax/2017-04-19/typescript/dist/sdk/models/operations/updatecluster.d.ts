import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateClusterXAmzTargetEnum {
    AmazonDaxv3UpdateCluster = "AmazonDAXV3.UpdateCluster"
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
    clusterNotFoundFault?: any;
    contentType: string;
    invalidClusterStateFault?: any;
    invalidParameterCombinationException?: any;
    invalidParameterGroupStateFault?: any;
    invalidParameterValueException?: any;
    parameterGroupNotFoundFault?: any;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
    updateClusterResponse?: shared.UpdateClusterResponse;
}
