import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProfilingGroupQueryParams extends SpeakeasyBase {
    clientToken: string;
}
export declare class CreateProfilingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 *  Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group.
**/
export declare class CreateProfilingGroupRequestBodyAgentOrchestrationConfig extends SpeakeasyBase {
    profilingEnabled?: boolean;
}
export declare enum CreateProfilingGroupRequestBodyComputePlatformEnum {
    Default = "Default",
    AwsLambda = "AWSLambda"
}
export declare class CreateProfilingGroupRequestBody extends SpeakeasyBase {
    agentOrchestrationConfig?: CreateProfilingGroupRequestBodyAgentOrchestrationConfig;
    computePlatform?: CreateProfilingGroupRequestBodyComputePlatformEnum;
    profilingGroupName: string;
    tags?: Map<string, string>;
}
export declare class CreateProfilingGroupRequest extends SpeakeasyBase {
    queryParams: CreateProfilingGroupQueryParams;
    headers: CreateProfilingGroupHeaders;
    request: CreateProfilingGroupRequestBody;
}
export declare class CreateProfilingGroupResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createProfilingGroupResponse?: shared.CreateProfilingGroupResponse;
    internalServerException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
