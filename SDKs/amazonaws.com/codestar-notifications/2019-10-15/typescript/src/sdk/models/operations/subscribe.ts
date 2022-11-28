import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SubscribeHeaders extends SpeakeasyBase {
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
}


// SubscribeRequestBodyTarget
/** 
 * Information about the SNS topics associated with a notification rule.
**/
export class SubscribeRequestBodyTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TargetAddress" })
  targetAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetType" })
  targetType?: string;
}


export class SubscribeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Target" })
  target: SubscribeRequestBodyTarget;
}


export class SubscribeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SubscribeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SubscribeRequestBody;
}


export class SubscribeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscribeResult?: shared.SubscribeResult;

  @SpeakeasyMetadata()
  validationException?: any;
}
