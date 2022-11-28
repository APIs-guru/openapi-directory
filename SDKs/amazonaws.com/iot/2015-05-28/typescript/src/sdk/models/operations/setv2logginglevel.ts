import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetV2LoggingLevelHeaders extends SpeakeasyBase {
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

export enum SetV2LoggingLevelRequestBodyLogLevelEnum {
    Debug = "DEBUG",
    Info = "INFO",
    Error = "ERROR",
    Warn = "WARN",
    Disabled = "DISABLED"
}


// SetV2LoggingLevelRequestBodyLogTarget
/** 
 * A log target.
**/
export class SetV2LoggingLevelRequestBodyLogTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetName" })
  targetName?: string;

  @SpeakeasyMetadata({ data: "json, name=targetType" })
  targetType?: shared.LogTargetTypeEnum;
}


export class SetV2LoggingLevelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logLevel" })
  logLevel: SetV2LoggingLevelRequestBodyLogLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=logTarget" })
  logTarget: SetV2LoggingLevelRequestBodyLogTarget;
}


export class SetV2LoggingLevelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SetV2LoggingLevelHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SetV2LoggingLevelRequestBody;
}


export class SetV2LoggingLevelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notConfiguredException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
