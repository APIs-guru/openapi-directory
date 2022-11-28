import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateProfilingGroupPathParams extends SpeakeasyBase {
    profilingGroupName: string;
}
export declare class UpdateProfilingGroupHeaders extends SpeakeasyBase {
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
export declare class UpdateProfilingGroupRequestBodyAgentOrchestrationConfig extends SpeakeasyBase {
    profilingEnabled?: boolean;
}
export declare class UpdateProfilingGroupRequestBody extends SpeakeasyBase {
    agentOrchestrationConfig: UpdateProfilingGroupRequestBodyAgentOrchestrationConfig;
}
export declare class UpdateProfilingGroupRequest extends SpeakeasyBase {
    pathParams: UpdateProfilingGroupPathParams;
    headers: UpdateProfilingGroupHeaders;
    request: UpdateProfilingGroupRequestBody;
}
export declare class UpdateProfilingGroupResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateProfilingGroupResponse?: shared.UpdateProfilingGroupResponse;
    validationException?: any;
}
