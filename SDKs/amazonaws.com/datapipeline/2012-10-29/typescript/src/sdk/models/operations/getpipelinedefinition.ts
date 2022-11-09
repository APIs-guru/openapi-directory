import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetPipelineDefinitionXAmzTargetEnum {
    DataPipelineGetPipelineDefinition = "DataPipeline.GetPipelineDefinition"
}


export class GetPipelineDefinitionHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetPipelineDefinitionXAmzTargetEnum;
}


export class GetPipelineDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetPipelineDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetPipelineDefinitionInput;
}


export class GetPipelineDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPipelineDefinitionOutput?: shared.GetPipelineDefinitionOutput;

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
}
