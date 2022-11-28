import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBackendApiPathParams extends SpeakeasyBase {
    appId: string;
    backendEnvironmentName: string;
}
export declare class GetBackendApiHeaders extends SpeakeasyBase {
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
export declare class GetBackendApiRequestBodyResourceConfig extends SpeakeasyBase {
    additionalAuthTypes?: shared.BackendApiAuthType[];
    apiName?: string;
    conflictResolution?: shared.BackendApiConflictResolution;
    defaultAuthType?: shared.BackendApiAuthType;
    service?: string;
    transformSchema?: string;
}
export declare class GetBackendApiRequestBody extends SpeakeasyBase {
    resourceConfig?: GetBackendApiRequestBodyResourceConfig;
    resourceName: string;
}
export declare class GetBackendApiRequest extends SpeakeasyBase {
    pathParams: GetBackendApiPathParams;
    headers: GetBackendApiHeaders;
    request: GetBackendApiRequestBody;
}
export declare class GetBackendApiResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    gatewayTimeoutException?: any;
    getBackendApiResponse?: shared.GetBackendApiResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
