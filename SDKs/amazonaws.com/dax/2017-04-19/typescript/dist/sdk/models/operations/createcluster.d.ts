import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateClusterXAmzTargetEnum {
    AmazonDaxv3CreateCluster = "AmazonDAXV3.CreateCluster"
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
    clusterAlreadyExistsFault?: any;
    clusterQuotaForCustomerExceededFault?: any;
    contentType: string;
    createClusterResponse?: shared.CreateClusterResponse;
    insufficientClusterCapacityFault?: any;
    invalidClusterStateFault?: any;
    invalidParameterCombinationException?: any;
    invalidParameterGroupStateFault?: any;
    invalidParameterValueException?: any;
    invalidVpcNetworkStateFault?: any;
    nodeQuotaForClusterExceededFault?: any;
    nodeQuotaForCustomerExceededFault?: any;
    parameterGroupNotFoundFault?: any;
    serviceLinkedRoleNotFoundFault?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    subnetGroupNotFoundFault?: any;
    tagQuotaPerResourceExceeded?: any;
}
