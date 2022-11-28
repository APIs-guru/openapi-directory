import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetV2LoggingLevelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum SetV2LoggingLevelRequestBodyLogLevelEnum {
    Debug = "DEBUG",
    Info = "INFO",
    Error = "ERROR",
    Warn = "WARN",
    Disabled = "DISABLED"
}
/**
 * A log target.
**/
export declare class SetV2LoggingLevelRequestBodyLogTarget extends SpeakeasyBase {
    targetName?: string;
    targetType?: shared.LogTargetTypeEnum;
}
export declare class SetV2LoggingLevelRequestBody extends SpeakeasyBase {
    logLevel: SetV2LoggingLevelRequestBodyLogLevelEnum;
    logTarget: SetV2LoggingLevelRequestBodyLogTarget;
}
export declare class SetV2LoggingLevelRequest extends SpeakeasyBase {
    headers: SetV2LoggingLevelHeaders;
    request: SetV2LoggingLevelRequestBody;
}
export declare class SetV2LoggingLevelResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    notConfiguredException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
