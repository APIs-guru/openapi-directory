import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateServicePrimaryTaskSetXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateServicePrimaryTaskSet = "AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet"
}
export declare class UpdateServicePrimaryTaskSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServicePrimaryTaskSetXAmzTargetEnum;
}
export declare class UpdateServicePrimaryTaskSetRequest extends SpeakeasyBase {
    headers: UpdateServicePrimaryTaskSetHeaders;
    request: shared.UpdateServicePrimaryTaskSetRequest;
}
export declare class UpdateServicePrimaryTaskSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    invalidParameterException?: any;
    serverException?: any;
    serviceNotActiveException?: any;
    serviceNotFoundException?: any;
    statusCode: number;
    taskSetNotFoundException?: any;
    unsupportedFeatureException?: any;
    updateServicePrimaryTaskSetResponse?: shared.UpdateServicePrimaryTaskSetResponse;
}
