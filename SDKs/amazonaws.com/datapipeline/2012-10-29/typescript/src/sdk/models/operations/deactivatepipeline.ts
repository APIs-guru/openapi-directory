import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeactivatePipelineXAmzTargetEnum {
    DataPipelineDeactivatePipeline = "DataPipeline.DeactivatePipeline"
}


export class DeactivatePipelineHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DeactivatePipelineXAmzTargetEnum;
}


export class DeactivatePipelineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeactivatePipelineHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeactivatePipelineInput;
}


export class DeactivatePipelineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deactivatePipelineOutput?: Map<string, any>;

  @SpeakeasyMetadata()
  internalServiceError?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  pipelineDeletedException?: any;

  @SpeakeasyMetadata()
  pipelineNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
