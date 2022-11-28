import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBackendApiModelsPathParams extends SpeakeasyBase {
    appId: string;
    backendEnvironmentName: string;
}
export declare class GetBackendApiModelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBackendApiModelsRequestBody extends SpeakeasyBase {
    resourceName: string;
}
export declare class GetBackendApiModelsRequest extends SpeakeasyBase {
    pathParams: GetBackendApiModelsPathParams;
    headers: GetBackendApiModelsHeaders;
    request: GetBackendApiModelsRequestBody;
}
export declare class GetBackendApiModelsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    gatewayTimeoutException?: any;
    getBackendApiModelsResponse?: shared.GetBackendApiModelsResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
