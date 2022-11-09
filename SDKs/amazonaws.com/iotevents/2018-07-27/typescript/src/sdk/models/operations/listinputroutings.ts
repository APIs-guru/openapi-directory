import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListInputRoutingsHeaders extends SpeakeasyBase {
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


// ListInputRoutingsRequestBodyInputIdentifier
/** 
 *  The identifer of the input. 
**/
export class ListInputRoutingsRequestBodyInputIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=iotEventsInputIdentifier" })
  iotEventsInputIdentifier?: shared.IotEventsInputIdentifier;

  @Metadata({ data: "json, name=iotSiteWiseInputIdentifier" })
  iotSiteWiseInputIdentifier?: shared.IotSiteWiseInputIdentifier;
}


export class ListInputRoutingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputIdentifier" })
  inputIdentifier: ListInputRoutingsRequestBodyInputIdentifier;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}


export class ListInputRoutingsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListInputRoutingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListInputRoutingsRequestBody;
}


export class ListInputRoutingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listInputRoutingsResponse?: shared.ListInputRoutingsResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
