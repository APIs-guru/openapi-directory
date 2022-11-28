import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RunTaskXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113RunTask = "AmazonEC2ContainerServiceV20141113.RunTask"
}
export declare class RunTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RunTaskXAmzTargetEnum;
}
export declare class RunTaskRequest extends SpeakeasyBase {
    headers: RunTaskHeaders;
    request: shared.RunTaskRequest;
}
export declare class RunTaskResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    blockedException?: any;
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    invalidParameterException?: any;
    platformTaskDefinitionIncompatibilityException?: any;
    platformUnknownException?: any;
    runTaskResponse?: shared.RunTaskResponse;
    serverException?: any;
    statusCode: number;
    unsupportedFeatureException?: any;
}
