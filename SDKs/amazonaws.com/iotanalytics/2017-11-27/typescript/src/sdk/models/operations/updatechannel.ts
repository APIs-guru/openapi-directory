import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelName" })
  channelName: string;
}


export class UpdateChannelHeaders extends SpeakeasyBase {
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


// UpdateChannelRequestBodyChannelStorage
/** 
 * Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.
**/
export class UpdateChannelRequestBodyChannelStorage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerManagedS3" })
  customerManagedS3?: shared.CustomerManagedChannelS3Storage;

  @SpeakeasyMetadata({ data: "json, name=serviceManagedS3" })
  serviceManagedS3?: Map<string, any>;
}


// UpdateChannelRequestBodyRetentionPeriod
/** 
 * How long, in days, message data is kept.
**/
export class UpdateChannelRequestBodyRetentionPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numberOfDays" })
  numberOfDays?: number;

  @SpeakeasyMetadata({ data: "json, name=unlimited" })
  unlimited?: boolean;
}


export class UpdateChannelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelStorage" })
  channelStorage?: UpdateChannelRequestBodyChannelStorage;

  @SpeakeasyMetadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: UpdateChannelRequestBodyRetentionPeriod;
}


export class UpdateChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateChannelPathParams;

  @SpeakeasyMetadata()
  headers: UpdateChannelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateChannelRequestBody;
}


export class UpdateChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
