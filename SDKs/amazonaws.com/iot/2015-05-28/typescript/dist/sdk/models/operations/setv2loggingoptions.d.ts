import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetV2LoggingOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum {
    Debug = "DEBUG",
    Info = "INFO",
    Error = "ERROR",
    Warn = "WARN",
    Disabled = "DISABLED"
}
export declare class SetV2LoggingOptionsRequestBody extends SpeakeasyBase {
    defaultLogLevel?: SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum;
    disableAllLogs?: boolean;
    roleArn?: string;
}
export declare class SetV2LoggingOptionsRequest extends SpeakeasyBase {
    headers: SetV2LoggingOptionsHeaders;
    request: SetV2LoggingOptionsRequestBody;
}
export declare class SetV2LoggingOptionsResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
