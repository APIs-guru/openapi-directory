import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdatePipelineXAmzTargetEnum {
    CodePipeline20150709UpdatePipeline = "CodePipeline_20150709.UpdatePipeline"
}


export class UpdatePipelineHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdatePipelineXAmzTargetEnum;
}


export class UpdatePipelineRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdatePipelineHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePipelineInput;
}


export class UpdatePipelineResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidActionDeclarationException?: any;

  @Metadata()
  invalidBlockerDeclarationException?: any;

  @Metadata()
  invalidStageDeclarationException?: any;

  @Metadata()
  invalidStructureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updatePipelineOutput?: shared.UpdatePipelineOutput;

  @Metadata()
  validationException?: any;
}
