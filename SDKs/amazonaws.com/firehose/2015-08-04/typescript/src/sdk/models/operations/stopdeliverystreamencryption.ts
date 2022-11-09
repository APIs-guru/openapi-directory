import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopDeliveryStreamEncryptionXAmzTargetEnum {
    Firehose20150804StopDeliveryStreamEncryption = "Firehose_20150804.StopDeliveryStreamEncryption"
}


export class StopDeliveryStreamEncryptionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopDeliveryStreamEncryptionXAmzTargetEnum;
}


export class StopDeliveryStreamEncryptionRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopDeliveryStreamEncryptionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopDeliveryStreamEncryptionInput;
}


export class StopDeliveryStreamEncryptionResponse extends SpeakeasyBase {
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
  stopDeliveryStreamEncryptionOutput?: Map<string, any>;
}
