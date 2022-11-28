import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetLoggingOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Describes the logging options payload.
**/
export declare class SetLoggingOptionsRequestBodyLoggingOptionsPayload extends SpeakeasyBase {
    logLevel?: shared.LogLevelEnum;
    roleArn?: string;
}
export declare class SetLoggingOptionsRequestBody extends SpeakeasyBase {
    loggingOptionsPayload: SetLoggingOptionsRequestBodyLoggingOptionsPayload;
}
export declare class SetLoggingOptionsRequest extends SpeakeasyBase {
    headers: SetLoggingOptionsHeaders;
    request: SetLoggingOptionsRequestBody;
}
export declare class SetLoggingOptionsResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
