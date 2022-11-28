import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateImagePipelineHeaders extends SpeakeasyBase {
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


// CreateImagePipelineRequestBodyImageTestsConfiguration
/** 
 * Image tests configuration.
**/
export class CreateImagePipelineRequestBodyImageTestsConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageTestsEnabled" })
  imageTestsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timeoutMinutes" })
  timeoutMinutes?: number;
}


// CreateImagePipelineRequestBodySchedule
/** 
 * A schedule configures how often and when a pipeline will automatically create a new image.
**/
export class CreateImagePipelineRequestBodySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineExecutionStartCondition" })
  pipelineExecutionStartCondition?: shared.PipelineExecutionStartConditionEnum;

  @SpeakeasyMetadata({ data: "json, name=scheduleExpression" })
  scheduleExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;
}

export enum CreateImagePipelineRequestBodyStatusEnum {
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}


export class CreateImagePipelineRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=containerRecipeArn" })
  containerRecipeArn?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=distributionConfigurationArn" })
  distributionConfigurationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=enhancedImageMetadataEnabled" })
  enhancedImageMetadataEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=imageRecipeArn" })
  imageRecipeArn?: string;

  @SpeakeasyMetadata({ data: "json, name=imageTestsConfiguration" })
  imageTestsConfiguration?: CreateImagePipelineRequestBodyImageTestsConfiguration;

  @SpeakeasyMetadata({ data: "json, name=infrastructureConfigurationArn" })
  infrastructureConfigurationArn: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: CreateImagePipelineRequestBodySchedule;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CreateImagePipelineRequestBodyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateImagePipelineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateImagePipelineHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateImagePipelineRequestBody;
}


export class CreateImagePipelineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  callRateLimitExceededException?: any;

  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createImagePipelineResponse?: shared.CreateImagePipelineResponse;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  idempotentParameterMismatchException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
