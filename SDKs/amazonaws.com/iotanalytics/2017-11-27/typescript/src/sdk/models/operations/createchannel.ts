import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateChannelHeaders extends SpeakeasyBase {
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


// CreateChannelRequestBodyChannelStorage
/** 
 * Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.
**/
export class CreateChannelRequestBodyChannelStorage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerManagedS3" })
  customerManagedS3?: shared.CustomerManagedChannelS3Storage;

  @SpeakeasyMetadata({ data: "json, name=serviceManagedS3" })
  serviceManagedS3?: Map<string, any>;
}


// CreateChannelRequestBodyRetentionPeriod
/** 
 * How long, in days, message data is kept.
**/
export class CreateChannelRequestBodyRetentionPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numberOfDays" })
  numberOfDays?: number;

  @SpeakeasyMetadata({ data: "json, name=unlimited" })
  unlimited?: boolean;
}


export class CreateChannelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelName" })
  channelName: string;

  @SpeakeasyMetadata({ data: "json, name=channelStorage" })
  channelStorage?: CreateChannelRequestBodyChannelStorage;

  @SpeakeasyMetadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: CreateChannelRequestBodyRetentionPeriod;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateChannelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateChannelRequestBody;
}


export class CreateChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createChannelResponse?: shared.CreateChannelResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
