import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum IncreaseReplicationFactorXAmzTargetEnum {
    AmazonDaxv3IncreaseReplicationFactor = "AmazonDAXV3.IncreaseReplicationFactor"
}
export declare class IncreaseReplicationFactorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: IncreaseReplicationFactorXAmzTargetEnum;
}
export declare class IncreaseReplicationFactorRequest extends SpeakeasyBase {
    headers: IncreaseReplicationFactorHeaders;
    request: shared.IncreaseReplicationFactorRequest;
}
export declare class IncreaseReplicationFactorResponse extends SpeakeasyBase {
    clusterNotFoundFault?: any;
    contentType: string;
    increaseReplicationFactorResponse?: shared.IncreaseReplicationFactorResponse;
    insufficientClusterCapacityFault?: any;
    invalidClusterStateFault?: any;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    invalidVpcNetworkStateFault?: any;
    nodeQuotaForClusterExceededFault?: any;
    nodeQuotaForCustomerExceededFault?: any;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
}
