import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopTaskXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113StopTask = "AmazonEC2ContainerServiceV20141113.StopTask"
}
export declare class StopTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopTaskXAmzTargetEnum;
}
export declare class StopTaskRequest extends SpeakeasyBase {
    headers: StopTaskHeaders;
    request: shared.StopTaskRequest;
}
export declare class StopTaskResponse extends SpeakeasyBase {
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
    stopTaskResponse?: shared.StopTaskResponse;
}
