import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBackendApiPathParams extends SpeakeasyBase {
    appId: string;
    backendEnvironmentName: string;
}
export declare class UpdateBackendApiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The resource config for the data model, configured as a part of the Amplify project.
**/
export declare class UpdateBackendApiRequestBodyResourceConfig extends SpeakeasyBase {
    additionalAuthTypes?: shared.BackendApiAuthType[];
    apiName?: string;
    conflictResolution?: shared.BackendApiConflictResolution;
    defaultAuthType?: shared.BackendApiAuthType;
    service?: string;
    transformSchema?: string;
}
export declare class UpdateBackendApiRequestBody extends SpeakeasyBase {
    resourceConfig?: UpdateBackendApiRequestBodyResourceConfig;
    resourceName: string;
}
export declare class UpdateBackendApiRequest extends SpeakeasyBase {
    pathParams: UpdateBackendApiPathParams;
    headers: UpdateBackendApiHeaders;
    request: UpdateBackendApiRequestBody;
}
export declare class UpdateBackendApiResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateBackendApiResponse?: shared.UpdateBackendApiResponse;
}
