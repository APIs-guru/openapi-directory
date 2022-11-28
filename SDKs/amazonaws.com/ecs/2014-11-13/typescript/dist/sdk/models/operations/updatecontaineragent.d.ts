import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateContainerAgentXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateContainerAgent = "AmazonEC2ContainerServiceV20141113.UpdateContainerAgent"
}
export declare class UpdateContainerAgentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateContainerAgentXAmzTargetEnum;
}
export declare class UpdateContainerAgentRequest extends SpeakeasyBase {
    headers: UpdateContainerAgentHeaders;
    request: shared.UpdateContainerAgentRequest;
}
export declare class UpdateContainerAgentResponse extends SpeakeasyBase {
    clientException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    invalidParameterException?: any;
    missingVersionException?: any;
    noUpdateAvailableException?: any;
    serverException?: any;
    statusCode: number;
    updateContainerAgentResponse?: shared.UpdateContainerAgentResponse;
    updateInProgressException?: any;
}
