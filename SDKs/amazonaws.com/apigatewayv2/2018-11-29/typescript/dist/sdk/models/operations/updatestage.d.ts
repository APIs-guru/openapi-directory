import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateStagePathParams extends SpeakeasyBase {
    apiId: string;
    stageName: string;
}
export declare class UpdateStageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Settings for logging access in a stage.
**/
export declare class UpdateStageRequestBodyAccessLogSettings extends SpeakeasyBase {
    destinationArn?: string;
    format?: string;
}
/**
 * Represents a collection of route settings.
**/
export declare class UpdateStageRequestBodyDefaultRouteSettings extends SpeakeasyBase {
    dataTraceEnabled?: boolean;
    detailedMetricsEnabled?: boolean;
    loggingLevel?: shared.LoggingLevelEnum;
    throttlingBurstLimit?: number;
    throttlingRateLimit?: number;
}
export declare class UpdateStageRequestBody extends SpeakeasyBase {
    accessLogSettings?: UpdateStageRequestBodyAccessLogSettings;
    autoDeploy?: boolean;
    clientCertificateId?: string;
    defaultRouteSettings?: UpdateStageRequestBodyDefaultRouteSettings;
    deploymentId?: string;
    description?: string;
    routeSettings?: Map<string, shared.RouteSettings>;
    stageVariables?: Map<string, string>;
}
export declare class UpdateStageRequest extends SpeakeasyBase {
    pathParams: UpdateStagePathParams;
    headers: UpdateStageHeaders;
    request: UpdateStageRequestBody;
}
export declare class UpdateStageResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateStageResponse?: shared.UpdateStageResponse;
}
