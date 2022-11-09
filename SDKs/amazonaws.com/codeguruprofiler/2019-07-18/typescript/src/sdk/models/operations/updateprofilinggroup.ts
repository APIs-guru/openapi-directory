import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateProfilingGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=profilingGroupName" })
  profilingGroupName: string;
}


export class UpdateProfilingGroupHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateProfilingGroupRequestBodyAgentOrchestrationConfig
/** 
 *  Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group. 
**/
export class UpdateProfilingGroupRequestBodyAgentOrchestrationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=profilingEnabled" })
  profilingEnabled?: boolean;
}


export class UpdateProfilingGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentOrchestrationConfig" })
  agentOrchestrationConfig: UpdateProfilingGroupRequestBodyAgentOrchestrationConfig;
}


export class UpdateProfilingGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateProfilingGroupPathParams;

  @Metadata()
  headers: UpdateProfilingGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateProfilingGroupRequestBody;
}


export class UpdateProfilingGroupResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateProfilingGroupResponse?: shared.UpdateProfilingGroupResponse;

  @Metadata()
  validationException?: any;
}
