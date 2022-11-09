import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartDeliveryStreamEncryptionXAmzTargetEnum {
    Firehose20150804StartDeliveryStreamEncryption = "Firehose_20150804.StartDeliveryStreamEncryption"
}


export class StartDeliveryStreamEncryptionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartDeliveryStreamEncryptionXAmzTargetEnum;
}


export class StartDeliveryStreamEncryptionRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartDeliveryStreamEncryptionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartDeliveryStreamEncryptionInput;
}


export class StartDeliveryStreamEncryptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  invalidKmsResourceException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  startDeliveryStreamEncryptionOutput?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
