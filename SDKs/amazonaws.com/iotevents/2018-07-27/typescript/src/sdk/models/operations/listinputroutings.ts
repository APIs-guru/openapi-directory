import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListInputRoutingsHeaders extends SpeakeasyBase {
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


// ListInputRoutingsRequestBodyInputIdentifier
/** 
 *  The identifer of the input. 
**/
export class ListInputRoutingsRequestBodyInputIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iotEventsInputIdentifier" })
  iotEventsInputIdentifier?: shared.IotEventsInputIdentifier;

  @SpeakeasyMetadata({ data: "json, name=iotSiteWiseInputIdentifier" })
  iotSiteWiseInputIdentifier?: shared.IotSiteWiseInputIdentifier;
}


export class ListInputRoutingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputIdentifier" })
  inputIdentifier: ListInputRoutingsRequestBodyInputIdentifier;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}


export class ListInputRoutingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ListInputRoutingsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListInputRoutingsRequestBody;
}


export class ListInputRoutingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  listInputRoutingsResponse?: shared.ListInputRoutingsResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
