import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdatePipelineXAmzTargetEnum {
    CodePipeline20150709UpdatePipeline = "CodePipeline_20150709.UpdatePipeline"
}


export class UpdatePipelineHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdatePipelineXAmzTargetEnum;
}


export class UpdatePipelineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdatePipelineHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePipelineInput;
}


export class UpdatePipelineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidActionDeclarationException?: any;

  @SpeakeasyMetadata()
  invalidBlockerDeclarationException?: any;

  @SpeakeasyMetadata()
  invalidStageDeclarationException?: any;

  @SpeakeasyMetadata()
  invalidStructureException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatePipelineOutput?: shared.UpdatePipelineOutput;

  @SpeakeasyMetadata()
  validationException?: any;
}
