import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutDeliveryChannelXAmzTargetEnum {
    StarlingDoveServicePutDeliveryChannel = "StarlingDoveService.PutDeliveryChannel"
}


export class PutDeliveryChannelHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutDeliveryChannelXAmzTargetEnum;
}


export class PutDeliveryChannelRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutDeliveryChannelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutDeliveryChannelRequest;
}


export class PutDeliveryChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  insufficientDeliveryPolicyException?: any;

  @Metadata()
  invalidDeliveryChannelNameException?: any;

  @Metadata()
  invalidS3KeyPrefixException?: any;

  @Metadata()
  invalidS3KmsKeyArnException?: any;

  @Metadata()
  invalidSnsTopicArnException?: any;

  @Metadata()
  maxNumberOfDeliveryChannelsExceededException?: any;

  @Metadata()
  noAvailableConfigurationRecorderException?: any;

  @Metadata()
  noSuchBucketException?: any;

  @Metadata()
  statusCode: number;
}
