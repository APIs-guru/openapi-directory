import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateProfilingGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientToken" })
  clientToken: string;
}


export class CreateProfilingGroupHeaders extends SpeakeasyBase {
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


// CreateProfilingGroupRequestBodyAgentOrchestrationConfig
/** 
 *  Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group. 
**/
export class CreateProfilingGroupRequestBodyAgentOrchestrationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profilingEnabled" })
  profilingEnabled?: boolean;
}

export enum CreateProfilingGroupRequestBodyComputePlatformEnum {
    Default = "Default",
    AwsLambda = "AWSLambda"
}


export class CreateProfilingGroupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentOrchestrationConfig" })
  agentOrchestrationConfig?: CreateProfilingGroupRequestBodyAgentOrchestrationConfig;

  @SpeakeasyMetadata({ data: "json, name=computePlatform" })
  computePlatform?: CreateProfilingGroupRequestBodyComputePlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=profilingGroupName" })
  profilingGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateProfilingGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateProfilingGroupQueryParams;

  @SpeakeasyMetadata()
  headers: CreateProfilingGroupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateProfilingGroupRequestBody;
}


export class CreateProfilingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createProfilingGroupResponse?: shared.CreateProfilingGroupResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
