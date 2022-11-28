import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetV2LoggingOptionsHeaders extends SpeakeasyBase {
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

export enum SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum {
    Debug = "DEBUG",
    Info = "INFO",
    Error = "ERROR",
    Warn = "WARN",
    Disabled = "DISABLED"
}


export class SetV2LoggingOptionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultLogLevel" })
  defaultLogLevel?: SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=disableAllLogs" })
  disableAllLogs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}


export class SetV2LoggingOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SetV2LoggingOptionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SetV2LoggingOptionsRequestBody;
}


export class SetV2LoggingOptionsResponse extends SpeakeasyBase {
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
