import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateProfilingGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=clientToken" })
  clientToken: string;
}


export class CreateProfilingGroupHeaders extends SpeakeasyBase {
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


// CreateProfilingGroupRequestBodyAgentOrchestrationConfig
/** 
 *  Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group. 
**/
export class CreateProfilingGroupRequestBodyAgentOrchestrationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=profilingEnabled" })
  profilingEnabled?: boolean;
}

export enum CreateProfilingGroupRequestBodyComputePlatformEnum {
    Default = "Default"
,    AwsLambda = "AWSLambda"
}


export class CreateProfilingGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentOrchestrationConfig" })
  agentOrchestrationConfig?: CreateProfilingGroupRequestBodyAgentOrchestrationConfig;

  @Metadata({ data: "json, name=computePlatform" })
  computePlatform?: CreateProfilingGroupRequestBodyComputePlatformEnum;

  @Metadata({ data: "json, name=profilingGroupName" })
  profilingGroupName: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateProfilingGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateProfilingGroupQueryParams;

  @Metadata()
  headers: CreateProfilingGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateProfilingGroupRequestBody;
}


export class CreateProfilingGroupResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createProfilingGroupResponse?: shared.CreateProfilingGroupResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
