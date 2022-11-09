import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum BatchCheckLayerAvailabilityXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921BatchCheckLayerAvailability = "AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability"
}
export declare class BatchCheckLayerAvailabilityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchCheckLayerAvailabilityXAmzTargetEnum;
}
export declare class BatchCheckLayerAvailabilityRequest extends SpeakeasyBase {
    headers: BatchCheckLayerAvailabilityHeaders;
    request: shared.BatchCheckLayerAvailabilityRequest;
}
export declare class BatchCheckLayerAvailabilityResponse extends SpeakeasyBase {
    batchCheckLayerAvailabilityResponse?: shared.BatchCheckLayerAvailabilityResponse;
    contentType: string;
    invalidParameterException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
