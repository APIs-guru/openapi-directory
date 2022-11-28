import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ExecuteCommandXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ExecuteCommand = "AmazonEC2ContainerServiceV20141113.ExecuteCommand"
}
export declare class ExecuteCommandHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExecuteCommandXAmzTargetEnum;
}
export declare class ExecuteCommandRequest extends SpeakeasyBase {
    headers: ExecuteCommandHeaders;
    request: shared.ExecuteCommandRequest;
}
export declare class ExecuteCommandResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    executeCommandResponse?: shared.ExecuteCommandResponse;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
    targetNotConnectedException?: any;
}
