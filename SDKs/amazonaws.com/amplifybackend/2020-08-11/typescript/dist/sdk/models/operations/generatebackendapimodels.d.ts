import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenerateBackendApiModelsPathParams extends SpeakeasyBase {
    appId: string;
    backendEnvironmentName: string;
}
export declare class GenerateBackendApiModelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GenerateBackendApiModelsRequestBody extends SpeakeasyBase {
    resourceName: string;
}
export declare class GenerateBackendApiModelsRequest extends SpeakeasyBase {
    pathParams: GenerateBackendApiModelsPathParams;
    headers: GenerateBackendApiModelsHeaders;
    request: GenerateBackendApiModelsRequestBody;
}
export declare class GenerateBackendApiModelsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    gatewayTimeoutException?: any;
    generateBackendApiModelsResponse?: shared.GenerateBackendApiModelsResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
