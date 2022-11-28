import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteBackendApiPathParams extends SpeakeasyBase {
    appId: string;
    backendEnvironmentName: string;
}
export declare class DeleteBackendApiHeaders extends SpeakeasyBase {
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
export declare class DeleteBackendApiRequestBodyResourceConfig extends SpeakeasyBase {
    additionalAuthTypes?: shared.BackendApiAuthType[];
    apiName?: string;
    conflictResolution?: shared.BackendApiConflictResolution;
    defaultAuthType?: shared.BackendApiAuthType;
    service?: string;
    transformSchema?: string;
}
export declare class DeleteBackendApiRequestBody extends SpeakeasyBase {
    resourceConfig?: DeleteBackendApiRequestBodyResourceConfig;
    resourceName: string;
}
export declare class DeleteBackendApiRequest extends SpeakeasyBase {
    pathParams: DeleteBackendApiPathParams;
    headers: DeleteBackendApiHeaders;
    request: DeleteBackendApiRequestBody;
}
export declare class DeleteBackendApiResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteBackendApiResponse?: shared.DeleteBackendApiResponse;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
