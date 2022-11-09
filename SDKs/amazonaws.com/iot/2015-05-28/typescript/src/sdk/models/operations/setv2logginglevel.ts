import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetV2LoggingLevelHeaders extends SpeakeasyBase {
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

export enum SetV2LoggingLevelRequestBodyLogLevelEnum {
    Debug = "DEBUG"
,    Info = "INFO"
,    Error = "ERROR"
,    Warn = "WARN"
,    Disabled = "DISABLED"
}


// SetV2LoggingLevelRequestBodyLogTarget
/** 
 * A log target.
**/
export class SetV2LoggingLevelRequestBodyLogTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=targetName" })
  targetName?: string;

  @Metadata({ data: "json, name=targetType" })
  targetType?: shared.LogTargetTypeEnum;
}


export class SetV2LoggingLevelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=logLevel" })
  logLevel: SetV2LoggingLevelRequestBodyLogLevelEnum;

  @Metadata({ data: "json, name=logTarget" })
  logTarget: SetV2LoggingLevelRequestBodyLogTarget;
}


export class SetV2LoggingLevelRequest extends SpeakeasyBase {
  @Metadata()
  headers: SetV2LoggingLevelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SetV2LoggingLevelRequestBody;
}


export class SetV2LoggingLevelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notConfiguredException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
