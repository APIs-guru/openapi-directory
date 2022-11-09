import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UntagDeliveryStreamXAmzTargetEnum {
    Firehose20150804UntagDeliveryStream = "Firehose_20150804.UntagDeliveryStream"
}


export class UntagDeliveryStreamHeaders extends SpeakeasyBase {
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
  xAmzTarget: UntagDeliveryStreamXAmzTargetEnum;
}


export class UntagDeliveryStreamRequest extends SpeakeasyBase {
  @Metadata()
  headers: UntagDeliveryStreamHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UntagDeliveryStreamInput;
}


export class UntagDeliveryStreamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  untagDeliveryStreamOutput?: Map<string, any>;
}
