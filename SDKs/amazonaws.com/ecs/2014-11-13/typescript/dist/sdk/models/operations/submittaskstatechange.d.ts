import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SubmitTaskStateChangeXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113SubmitTaskStateChange = "AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange"
}
export declare class SubmitTaskStateChangeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SubmitTaskStateChangeXAmzTargetEnum;
}
export declare class SubmitTaskStateChangeRequest extends SpeakeasyBase {
    headers: SubmitTaskStateChangeHeaders;
    request: shared.SubmitTaskStateChangeRequest;
}
export declare class SubmitTaskStateChangeResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    serverException?: any;
    statusCode: number;
    submitTaskStateChangeResponse?: shared.SubmitTaskStateChangeResponse;
}
