import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateTaskSetXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateTaskSet = "AmazonEC2ContainerServiceV20141113.UpdateTaskSet"
}
export declare class UpdateTaskSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTaskSetXAmzTargetEnum;
}
export declare class UpdateTaskSetRequest extends SpeakeasyBase {
    headers: UpdateTaskSetHeaders;
    request: shared.UpdateTaskSetRequest;
}
export declare class UpdateTaskSetResponse extends SpeakeasyBase {
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
    updateTaskSetResponse?: shared.UpdateTaskSetResponse;
}
