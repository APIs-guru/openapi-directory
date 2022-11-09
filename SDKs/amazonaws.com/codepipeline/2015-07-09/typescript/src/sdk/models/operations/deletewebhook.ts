import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteWebhookXAmzTargetEnum {
    CodePipeline20150709DeleteWebhook = "CodePipeline_20150709.DeleteWebhook"
}


export class DeleteWebhookHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteWebhookXAmzTargetEnum;
}


export class DeleteWebhookRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteWebhookHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteWebhookInput;
}


export class DeleteWebhookResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteWebhookOutput?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
