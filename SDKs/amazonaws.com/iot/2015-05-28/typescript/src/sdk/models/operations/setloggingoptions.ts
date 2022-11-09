import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetLoggingOptionsHeaders extends SpeakeasyBase {
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


// SetLoggingOptionsRequestBodyLoggingOptionsPayload
/** 
 * Describes the logging options payload.
**/
export class SetLoggingOptionsRequestBodyLoggingOptionsPayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=logLevel" })
  logLevel?: shared.LogLevelEnum;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}


export class SetLoggingOptionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=loggingOptionsPayload" })
  loggingOptionsPayload: SetLoggingOptionsRequestBodyLoggingOptionsPayload;
}


export class SetLoggingOptionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: SetLoggingOptionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SetLoggingOptionsRequestBody;
}


export class SetLoggingOptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
