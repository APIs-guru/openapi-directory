import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateImagePipelineHeaders extends SpeakeasyBase {
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


// CreateImagePipelineRequestBodyImageTestsConfiguration
/** 
 * Image tests configuration.
**/
export class CreateImagePipelineRequestBodyImageTestsConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageTestsEnabled" })
  imageTestsEnabled?: boolean;

  @Metadata({ data: "json, name=timeoutMinutes" })
  timeoutMinutes?: number;
}


// CreateImagePipelineRequestBodySchedule
/** 
 * A schedule configures how often and when a pipeline will automatically create a new image.
**/
export class CreateImagePipelineRequestBodySchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineExecutionStartCondition" })
  pipelineExecutionStartCondition?: shared.PipelineExecutionStartConditionEnum;

  @Metadata({ data: "json, name=scheduleExpression" })
  scheduleExpression?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;
}

export enum CreateImagePipelineRequestBodyStatusEnum {
    Disabled = "DISABLED"
,    Enabled = "ENABLED"
}


export class CreateImagePipelineRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=containerRecipeArn" })
  containerRecipeArn?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=distributionConfigurationArn" })
  distributionConfigurationArn?: string;

  @Metadata({ data: "json, name=enhancedImageMetadataEnabled" })
  enhancedImageMetadataEnabled?: boolean;

  @Metadata({ data: "json, name=imageRecipeArn" })
  imageRecipeArn?: string;

  @Metadata({ data: "json, name=imageTestsConfiguration" })
  imageTestsConfiguration?: CreateImagePipelineRequestBodyImageTestsConfiguration;

  @Metadata({ data: "json, name=infrastructureConfigurationArn" })
  infrastructureConfigurationArn: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=schedule" })
  schedule?: CreateImagePipelineRequestBodySchedule;

  @Metadata({ data: "json, name=status" })
  status?: CreateImagePipelineRequestBodyStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateImagePipelineRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateImagePipelineHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateImagePipelineRequestBody;
}


export class CreateImagePipelineResponse extends SpeakeasyBase {
  @Metadata()
  callRateLimitExceededException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createImagePipelineResponse?: shared.CreateImagePipelineResponse;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
