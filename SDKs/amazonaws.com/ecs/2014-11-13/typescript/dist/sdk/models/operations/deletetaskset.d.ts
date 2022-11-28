import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteTaskSetXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeleteTaskSet = "AmazonEC2ContainerServiceV20141113.DeleteTaskSet"
}
export declare class DeleteTaskSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTaskSetXAmzTargetEnum;
}
export declare class DeleteTaskSetRequest extends SpeakeasyBase {
    headers: DeleteTaskSetHeaders;
    request: shared.DeleteTaskSetRequest;
}
export declare class DeleteTaskSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    deleteTaskSetResponse?: shared.DeleteTaskSetResponse;
    invalidParameterException?: any;
    serverException?: any;
    serviceNotActiveException?: any;
    serviceNotFoundException?: any;
    statusCode: number;
    taskSetNotFoundException?: any;
    unsupportedFeatureException?: any;
}
