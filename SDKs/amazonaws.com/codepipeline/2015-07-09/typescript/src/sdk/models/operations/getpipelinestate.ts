import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetPipelineStateXAmzTargetEnum {
    CodePipeline20150709GetPipelineState = "CodePipeline_20150709.GetPipelineState"
}


export class GetPipelineStateHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetPipelineStateXAmzTargetEnum;
}


export class GetPipelineStateRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetPipelineStateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetPipelineStateInput;
}


export class GetPipelineStateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPipelineStateOutput?: shared.GetPipelineStateOutput;

  @Metadata()
  pipelineNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
