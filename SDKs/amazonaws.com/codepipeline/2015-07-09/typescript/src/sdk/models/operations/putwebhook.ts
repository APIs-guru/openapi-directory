import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutWebhookXAmzTargetEnum {
    CodePipeline20150709PutWebhook = "CodePipeline_20150709.PutWebhook"
}


export class PutWebhookHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutWebhookXAmzTargetEnum;
}


export class PutWebhookRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutWebhookHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutWebhookInput;
}


export class PutWebhookResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidTagsException?: any;

  @Metadata()
  invalidWebhookAuthenticationParametersException?: any;

  @Metadata()
  invalidWebhookFilterPatternException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  pipelineNotFoundException?: any;

  @Metadata()
  putWebhookOutput?: shared.PutWebhookOutput;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyTagsException?: any;

  @Metadata()
  validationException?: any;
}
