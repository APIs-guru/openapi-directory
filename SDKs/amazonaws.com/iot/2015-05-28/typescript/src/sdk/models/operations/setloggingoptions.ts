import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetLoggingOptionsHeaders extends SpeakeasyBase {
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


// SetLoggingOptionsRequestBodyLoggingOptionsPayload
/** 
 * Describes the logging options payload.
**/
export class SetLoggingOptionsRequestBodyLoggingOptionsPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logLevel" })
  logLevel?: shared.LogLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}


export class SetLoggingOptionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=loggingOptionsPayload" })
  loggingOptionsPayload: SetLoggingOptionsRequestBodyLoggingOptionsPayload;
}


export class SetLoggingOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SetLoggingOptionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SetLoggingOptionsRequestBody;
}


export class SetLoggingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
