import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateImagePipelineHeaders extends SpeakeasyBase {
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


// UpdateImagePipelineRequestBodyImageTestsConfiguration
/** 
 * Image tests configuration.
**/
export class UpdateImagePipelineRequestBodyImageTestsConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageTestsEnabled" })
  imageTestsEnabled?: boolean;

  @Metadata({ data: "json, name=timeoutMinutes" })
  timeoutMinutes?: number;
}


// UpdateImagePipelineRequestBodySchedule
/** 
 * A schedule configures how often and when a pipeline will automatically create a new image.
**/
export class UpdateImagePipelineRequestBodySchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineExecutionStartCondition" })
  pipelineExecutionStartCondition?: shared.PipelineExecutionStartConditionEnum;

  @Metadata({ data: "json, name=scheduleExpression" })
  scheduleExpression?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;
}

export enum UpdateImagePipelineRequestBodyStatusEnum {
    Disabled = "DISABLED"
,    Enabled = "ENABLED"
}


export class UpdateImagePipelineRequestBody extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=imagePipelineArn" })
  imagePipelineArn: string;

  @Metadata({ data: "json, name=imageRecipeArn" })
  imageRecipeArn?: string;

  @Metadata({ data: "json, name=imageTestsConfiguration" })
  imageTestsConfiguration?: UpdateImagePipelineRequestBodyImageTestsConfiguration;

  @Metadata({ data: "json, name=infrastructureConfigurationArn" })
  infrastructureConfigurationArn: string;

  @Metadata({ data: "json, name=schedule" })
  schedule?: UpdateImagePipelineRequestBodySchedule;

  @Metadata({ data: "json, name=status" })
  status?: UpdateImagePipelineRequestBodyStatusEnum;
}


export class UpdateImagePipelineRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateImagePipelineHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateImagePipelineRequestBody;
}


export class UpdateImagePipelineResponse extends SpeakeasyBase {
  @Metadata()
  callRateLimitExceededException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateImagePipelineResponse?: shared.UpdateImagePipelineResponse;
}
