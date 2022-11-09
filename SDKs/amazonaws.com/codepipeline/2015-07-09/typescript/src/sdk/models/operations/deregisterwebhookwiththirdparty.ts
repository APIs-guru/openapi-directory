import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeregisterWebhookWithThirdPartyXAmzTargetEnum {
    CodePipeline20150709DeregisterWebhookWithThirdParty = "CodePipeline_20150709.DeregisterWebhookWithThirdParty"
}


export class DeregisterWebhookWithThirdPartyHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeregisterWebhookWithThirdPartyXAmzTargetEnum;
}


export class DeregisterWebhookWithThirdPartyRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeregisterWebhookWithThirdPartyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeregisterWebhookWithThirdPartyInput;
}


export class DeregisterWebhookWithThirdPartyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deregisterWebhookWithThirdPartyOutput?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;

  @Metadata()
  webhookNotFoundException?: any;
}
