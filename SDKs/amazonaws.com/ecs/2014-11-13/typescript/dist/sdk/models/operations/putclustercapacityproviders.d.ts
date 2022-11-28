import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutClusterCapacityProvidersXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113PutClusterCapacityProviders = "AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders"
}
export declare class PutClusterCapacityProvidersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutClusterCapacityProvidersXAmzTargetEnum;
}
export declare class PutClusterCapacityProvidersRequest extends SpeakeasyBase {
    headers: PutClusterCapacityProvidersHeaders;
    request: shared.PutClusterCapacityProvidersRequest;
}
export declare class PutClusterCapacityProvidersResponse extends SpeakeasyBase {
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    invalidParameterException?: any;
    putClusterCapacityProvidersResponse?: shared.PutClusterCapacityProvidersResponse;
    resourceInUseException?: any;
    serverException?: any;
    statusCode: number;
    updateInProgressException?: any;
}
