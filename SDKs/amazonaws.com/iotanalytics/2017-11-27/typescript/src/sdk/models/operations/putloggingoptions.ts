import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutLoggingOptionsHeaders extends SpeakeasyBase {
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


// PutLoggingOptionsRequestBodyLoggingOptions
/** 
 * Information about logging options.
**/
export class PutLoggingOptionsRequestBodyLoggingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: shared.LoggingLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}


export class PutLoggingOptionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=loggingOptions" })
  loggingOptions: PutLoggingOptionsRequestBodyLoggingOptions;
}


export class PutLoggingOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutLoggingOptionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutLoggingOptionsRequestBody;
}


export class PutLoggingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
