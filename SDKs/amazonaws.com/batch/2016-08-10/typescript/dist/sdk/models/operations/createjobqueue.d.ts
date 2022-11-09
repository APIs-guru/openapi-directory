import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateJobQueueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateJobQueueRequestBodyStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class CreateJobQueueRequestBody extends SpeakeasyBase {
    computeEnvironmentOrder: shared.ComputeEnvironmentOrder[];
    jobQueueName: string;
    priority: number;
    state?: CreateJobQueueRequestBodyStateEnum;
    tags?: Map<string, string>;
}
export declare class CreateJobQueueRequest extends SpeakeasyBase {
    headers: CreateJobQueueHeaders;
    request: CreateJobQueueRequestBody;
}
export declare class CreateJobQueueResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    createJobQueueResponse?: shared.CreateJobQueueResponse;
    serverException?: any;
    statusCode: number;
}
