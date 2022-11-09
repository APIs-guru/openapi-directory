import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DecreaseReplicationFactorXAmzTargetEnum {
    AmazonDaxv3DecreaseReplicationFactor = "AmazonDAXV3.DecreaseReplicationFactor"
}
export declare class DecreaseReplicationFactorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DecreaseReplicationFactorXAmzTargetEnum;
}
export declare class DecreaseReplicationFactorRequest extends SpeakeasyBase {
    headers: DecreaseReplicationFactorHeaders;
    request: shared.DecreaseReplicationFactorRequest;
}
export declare class DecreaseReplicationFactorResponse extends SpeakeasyBase {
    clusterNotFoundFault?: any;
    contentType: string;
    decreaseReplicationFactorResponse?: shared.DecreaseReplicationFactorResponse;
    invalidClusterStateFault?: any;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    nodeNotFoundFault?: any;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
}
