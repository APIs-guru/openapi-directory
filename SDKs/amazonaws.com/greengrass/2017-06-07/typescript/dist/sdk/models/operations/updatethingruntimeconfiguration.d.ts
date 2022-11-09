import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateThingRuntimeConfigurationPathParams extends SpeakeasyBase {
    thingName: string;
}
export declare class UpdateThingRuntimeConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Configuration settings for running telemetry.
**/
export declare class UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration extends SpeakeasyBase {
    telemetry?: shared.TelemetryEnum;
}
export declare class UpdateThingRuntimeConfigurationRequestBody extends SpeakeasyBase {
    telemetryConfiguration?: UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration;
}
export declare class UpdateThingRuntimeConfigurationRequest extends SpeakeasyBase {
    pathParams: UpdateThingRuntimeConfigurationPathParams;
    headers: UpdateThingRuntimeConfigurationHeaders;
    request: UpdateThingRuntimeConfigurationRequestBody;
}
export declare class UpdateThingRuntimeConfigurationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalServerErrorException?: any;
    statusCode: number;
    updateThingRuntimeConfigurationResponse?: Map<string, any>;
}
