import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateChannelHeaders extends SpeakeasyBase {
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
}


// CreateChannelRequestBodyChannelStorage
/** 
 * Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.
**/
export class CreateChannelRequestBodyChannelStorage extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerManagedS3" })
  customerManagedS3?: shared.CustomerManagedChannelS3Storage;

  @Metadata({ data: "json, name=serviceManagedS3" })
  serviceManagedS3?: Map<string, any>;
}


// CreateChannelRequestBodyRetentionPeriod
/** 
 * How long, in days, message data is kept.
**/
export class CreateChannelRequestBodyRetentionPeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=numberOfDays" })
  numberOfDays?: number;

  @Metadata({ data: "json, name=unlimited" })
  unlimited?: boolean;
}


export class CreateChannelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelName" })
  channelName: string;

  @Metadata({ data: "json, name=channelStorage" })
  channelStorage?: CreateChannelRequestBodyChannelStorage;

  @Metadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: CreateChannelRequestBodyRetentionPeriod;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateChannelRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateChannelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateChannelRequestBody;
}


export class CreateChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createChannelResponse?: shared.CreateChannelResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
