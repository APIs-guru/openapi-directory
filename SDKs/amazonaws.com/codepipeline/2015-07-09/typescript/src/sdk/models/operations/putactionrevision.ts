import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutActionRevisionXAmzTargetEnum {
    CodePipeline20150709PutActionRevision = "CodePipeline_20150709.PutActionRevision"
}


export class PutActionRevisionHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutActionRevisionXAmzTargetEnum;
}


export class PutActionRevisionRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutActionRevisionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutActionRevisionInput;
}


export class PutActionRevisionResponse extends SpeakeasyBase {
  @Metadata()
  actionNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  pipelineNotFoundException?: any;

  @Metadata()
  putActionRevisionOutput?: shared.PutActionRevisionOutput;

  @Metadata()
  stageNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
