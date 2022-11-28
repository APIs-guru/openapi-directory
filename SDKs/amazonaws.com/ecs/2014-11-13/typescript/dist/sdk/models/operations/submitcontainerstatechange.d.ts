import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SubmitContainerStateChangeXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113SubmitContainerStateChange = "AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange"
}
export declare class SubmitContainerStateChangeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SubmitContainerStateChangeXAmzTargetEnum;
}
export declare class SubmitContainerStateChangeRequest extends SpeakeasyBase {
    headers: SubmitContainerStateChangeHeaders;
    request: shared.SubmitContainerStateChangeRequest;
}
export declare class SubmitContainerStateChangeResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientException?: any;
    contentType: string;
    serverException?: any;
    statusCode: number;
    submitContainerStateChangeResponse?: shared.SubmitContainerStateChangeResponse;
}
