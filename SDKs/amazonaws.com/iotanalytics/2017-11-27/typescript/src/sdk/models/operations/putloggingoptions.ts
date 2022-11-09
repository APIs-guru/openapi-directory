import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutLoggingOptionsHeaders extends SpeakeasyBase {
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


// PutLoggingOptionsRequestBodyLoggingOptions
/** 
 * Information about logging options.
**/
export class PutLoggingOptionsRequestBodyLoggingOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=level" })
  level?: shared.LoggingLevelEnum;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}


export class PutLoggingOptionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=loggingOptions" })
  loggingOptions: PutLoggingOptionsRequestBodyLoggingOptions;
}


export class PutLoggingOptionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutLoggingOptionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutLoggingOptionsRequestBody;
}


export class PutLoggingOptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
