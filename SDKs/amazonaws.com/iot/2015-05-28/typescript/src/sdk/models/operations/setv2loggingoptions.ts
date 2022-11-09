import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetV2LoggingOptionsHeaders extends SpeakeasyBase {
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

export enum SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum {
    Debug = "DEBUG"
,    Info = "INFO"
,    Error = "ERROR"
,    Warn = "WARN"
,    Disabled = "DISABLED"
}


export class SetV2LoggingOptionsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultLogLevel" })
  defaultLogLevel?: SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum;

  @Metadata({ data: "json, name=disableAllLogs" })
  disableAllLogs?: boolean;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}


export class SetV2LoggingOptionsRequest extends SpeakeasyBase {
  @Metadata()
  headers: SetV2LoggingOptionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SetV2LoggingOptionsRequestBody;
}


export class SetV2LoggingOptionsResponse extends SpeakeasyBase {
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
