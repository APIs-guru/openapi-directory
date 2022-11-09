import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutLoggingOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The values of the AWS IoT Events logging options.
**/
export declare class PutLoggingOptionsRequestBodyLoggingOptions extends SpeakeasyBase {
    detectorDebugOptions?: shared.DetectorDebugOption[];
    enabled?: boolean;
    level?: shared.LoggingLevelEnum;
    roleArn?: string;
}
export declare class PutLoggingOptionsRequestBody extends SpeakeasyBase {
    loggingOptions: PutLoggingOptionsRequestBodyLoggingOptions;
}
export declare class PutLoggingOptionsRequest extends SpeakeasyBase {
    headers: PutLoggingOptionsHeaders;
    request: PutLoggingOptionsRequestBody;
}
export declare class PutLoggingOptionsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unsupportedOperationException?: any;
}
