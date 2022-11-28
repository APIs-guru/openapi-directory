import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateBackendHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateBackendRequestBody extends SpeakeasyBase {
    appId: string;
    appName: string;
    backendEnvironmentName: string;
    resourceConfig?: Map<string, any>;
    resourceName?: string;
}
export declare class CreateBackendRequest extends SpeakeasyBase {
    headers: CreateBackendHeaders;
    request: CreateBackendRequestBody;
}
export declare class CreateBackendResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createBackendResponse?: shared.CreateBackendResponse;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
