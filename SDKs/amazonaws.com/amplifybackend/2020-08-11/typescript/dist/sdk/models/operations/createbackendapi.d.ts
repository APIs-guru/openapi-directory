import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateBackendApiPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class CreateBackendApiHeaders extends SpeakeasyBase {
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
export declare class CreateBackendApiRequestBodyResourceConfig extends SpeakeasyBase {
    additionalAuthTypes?: shared.BackendApiAuthType[];
    apiName?: string;
    conflictResolution?: shared.BackendApiConflictResolution;
    defaultAuthType?: shared.BackendApiAuthType;
    service?: string;
    transformSchema?: string;
}
export declare class CreateBackendApiRequestBody extends SpeakeasyBase {
    backendEnvironmentName: string;
    resourceConfig: CreateBackendApiRequestBodyResourceConfig;
    resourceName: string;
}
export declare class CreateBackendApiRequest extends SpeakeasyBase {
    pathParams: CreateBackendApiPathParams;
    headers: CreateBackendApiHeaders;
    request: CreateBackendApiRequestBody;
}
export declare class CreateBackendApiResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createBackendApiResponse?: shared.CreateBackendApiResponse;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
