import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SubscribeHeaders extends SpeakeasyBase {
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


// SubscribeRequestBodyTarget
/** 
 * Information about the SNS topics associated with a notification rule.
**/
export class SubscribeRequestBodyTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=TargetAddress" })
  targetAddress?: string;

  @Metadata({ data: "json, name=TargetType" })
  targetType?: string;
}


export class SubscribeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn: string;

  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=Target" })
  target: SubscribeRequestBodyTarget;
}


export class SubscribeRequest extends SpeakeasyBase {
  @Metadata()
  headers: SubscribeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SubscribeRequestBody;
}


export class SubscribeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  subscribeResult?: shared.SubscribeResult;

  @Metadata()
  validationException?: any;
}
