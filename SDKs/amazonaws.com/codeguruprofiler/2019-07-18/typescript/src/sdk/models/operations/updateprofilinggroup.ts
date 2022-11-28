import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateProfilingGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profilingGroupName" })
  profilingGroupName: string;
}


export class UpdateProfilingGroupHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateProfilingGroupRequestBodyAgentOrchestrationConfig
/** 
 *  Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group. 
**/
export class UpdateProfilingGroupRequestBodyAgentOrchestrationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profilingEnabled" })
  profilingEnabled?: boolean;
}


export class UpdateProfilingGroupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentOrchestrationConfig" })
  agentOrchestrationConfig: UpdateProfilingGroupRequestBodyAgentOrchestrationConfig;
}


export class UpdateProfilingGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateProfilingGroupPathParams;

  @SpeakeasyMetadata()
  headers: UpdateProfilingGroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateProfilingGroupRequestBody;
}


export class UpdateProfilingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateProfilingGroupResponse?: shared.UpdateProfilingGroupResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
