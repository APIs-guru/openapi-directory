import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
  webhookId: string;
}


export class UpdateWebhookHeaders extends SpeakeasyBase {
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
}


export class UpdateWebhookRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=branchName" })
  branchName?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;
}


export class UpdateWebhookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateWebhookPathParams;

  @Metadata()
  headers: UpdateWebhookHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateWebhookRequestBody;
}


export class UpdateWebhookResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  dependentServiceFailureException?: any;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;

  @Metadata()
  updateWebhookResult?: shared.UpdateWebhookResult;
}
