import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutDeliveryChannelXAmzTargetEnum {
    StarlingDoveServicePutDeliveryChannel = "StarlingDoveService.PutDeliveryChannel"
}


export class PutDeliveryChannelHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: PutDeliveryChannelXAmzTargetEnum;
}


export class PutDeliveryChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutDeliveryChannelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutDeliveryChannelRequest;
}


export class PutDeliveryChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  insufficientDeliveryPolicyException?: any;

  @SpeakeasyMetadata()
  invalidDeliveryChannelNameException?: any;

  @SpeakeasyMetadata()
  invalidS3KeyPrefixException?: any;

  @SpeakeasyMetadata()
  invalidS3KmsKeyArnException?: any;

  @SpeakeasyMetadata()
  invalidSnsTopicArnException?: any;

  @SpeakeasyMetadata()
  maxNumberOfDeliveryChannelsExceededException?: any;

  @SpeakeasyMetadata()
  noAvailableConfigurationRecorderException?: any;

  @SpeakeasyMetadata()
  noSuchBucketException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
