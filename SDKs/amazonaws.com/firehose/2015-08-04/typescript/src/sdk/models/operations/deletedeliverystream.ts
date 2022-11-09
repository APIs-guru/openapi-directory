import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteDeliveryStreamXAmzTargetEnum {
    Firehose20150804DeleteDeliveryStream = "Firehose_20150804.DeleteDeliveryStream"
}


export class DeleteDeliveryStreamHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteDeliveryStreamXAmzTargetEnum;
}


export class DeleteDeliveryStreamRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteDeliveryStreamHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteDeliveryStreamInput;
}


export class DeleteDeliveryStreamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteDeliveryStreamOutput?: Map<string, any>;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
