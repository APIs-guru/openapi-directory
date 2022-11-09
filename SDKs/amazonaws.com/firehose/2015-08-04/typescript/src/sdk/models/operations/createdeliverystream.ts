import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateDeliveryStreamXAmzTargetEnum {
    Firehose20150804CreateDeliveryStream = "Firehose_20150804.CreateDeliveryStream"
}


export class CreateDeliveryStreamHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateDeliveryStreamXAmzTargetEnum;
}


export class CreateDeliveryStreamRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDeliveryStreamHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateDeliveryStreamInput;
}


export class CreateDeliveryStreamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createDeliveryStreamOutput?: shared.CreateDeliveryStreamOutput;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  invalidKmsResourceException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  statusCode: number;
}
