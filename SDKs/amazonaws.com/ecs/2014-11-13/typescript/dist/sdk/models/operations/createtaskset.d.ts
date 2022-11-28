import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateTaskSetXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113CreateTaskSet = "AmazonEC2ContainerServiceV20141113.CreateTaskSet"
}
export declare class CreateTaskSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTaskSetXAmzTargetEnum;
}
export declare class CreateTaskSetRequest extends SpeakeasyBase {
    headers: CreateTaskSetHeaders;
    request: shared.CreateTaskSetRequest;
}
export declare class CreateTaskSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    createTaskSetResponse?: shared.CreateTaskSetResponse;
    invalidParameterException?: any;
    platformTaskDefinitionIncompatibilityException?: any;
    platformUnknownException?: any;
    serverException?: any;
    serviceNotActiveException?: any;
    serviceNotFoundException?: any;
    statusCode: number;
    unsupportedFeatureException?: any;
}
