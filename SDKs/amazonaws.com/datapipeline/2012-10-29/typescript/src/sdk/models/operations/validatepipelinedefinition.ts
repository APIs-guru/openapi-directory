import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ValidatePipelineDefinitionXAmzTargetEnum {
    DataPipelineValidatePipelineDefinition = "DataPipeline.ValidatePipelineDefinition"
}


export class ValidatePipelineDefinitionHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ValidatePipelineDefinitionXAmzTargetEnum;
}


export class ValidatePipelineDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: ValidatePipelineDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ValidatePipelineDefinitionInput;
}


export class ValidatePipelineDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceError?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  pipelineDeletedException?: any;

  @Metadata()
  pipelineNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validatePipelineDefinitionOutput?: shared.ValidatePipelineDefinitionOutput;
}
