import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartTaskXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113StartTask = "AmazonEC2ContainerServiceV20141113.StartTask"
}
export declare class StartTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartTaskXAmzTargetEnum;
}
export declare class StartTaskRequest extends SpeakeasyBase {
    headers: StartTaskHeaders;
    request: shared.StartTaskRequest;
}
export declare class StartTaskResponse extends SpeakeasyBase {
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    invalidParameterException?: any;
    serverException?: any;
    startTaskResponse?: shared.StartTaskResponse;
    statusCode: number;
}
