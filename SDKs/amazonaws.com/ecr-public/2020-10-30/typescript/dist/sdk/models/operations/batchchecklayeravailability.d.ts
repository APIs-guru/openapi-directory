import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum BatchCheckLayerAvailabilityXAmzTargetEnum {
    SpencerFrontendServiceBatchCheckLayerAvailability = "SpencerFrontendService.BatchCheckLayerAvailability"
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
    registryNotFoundException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
