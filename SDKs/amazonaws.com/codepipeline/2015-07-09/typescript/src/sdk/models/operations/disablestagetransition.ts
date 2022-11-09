import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisableStageTransitionXAmzTargetEnum {
    CodePipeline20150709DisableStageTransition = "CodePipeline_20150709.DisableStageTransition"
}


export class DisableStageTransitionHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisableStageTransitionXAmzTargetEnum;
}


export class DisableStageTransitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisableStageTransitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisableStageTransitionInput;
}


export class DisableStageTransitionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pipelineNotFoundException?: any;

  @Metadata()
  stageNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
