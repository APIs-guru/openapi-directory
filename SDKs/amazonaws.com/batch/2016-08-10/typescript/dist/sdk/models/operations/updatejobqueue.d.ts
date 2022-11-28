import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateJobQueueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateJobQueueRequestBodyStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class UpdateJobQueueRequestBody extends SpeakeasyBase {
    computeEnvironmentOrder?: shared.ComputeEnvironmentOrder[];
    jobQueue: string;
    priority?: number;
    state?: UpdateJobQueueRequestBodyStateEnum;
}
export declare class UpdateJobQueueRequest extends SpeakeasyBase {
    headers: UpdateJobQueueHeaders;
    request: UpdateJobQueueRequestBody;
}
export declare class UpdateJobQueueResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    serverException?: any;
    statusCode: number;
    updateJobQueueResponse?: shared.UpdateJobQueueResponse;
}
