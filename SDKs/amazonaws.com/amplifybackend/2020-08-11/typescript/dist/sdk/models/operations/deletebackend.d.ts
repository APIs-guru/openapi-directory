import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteBackendPathParams extends SpeakeasyBase {
    appId: string;
    backendEnvironmentName: string;
}
export declare class DeleteBackendHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteBackendRequest extends SpeakeasyBase {
    pathParams: DeleteBackendPathParams;
    headers: DeleteBackendHeaders;
}
export declare class DeleteBackendResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteBackendResponse?: shared.DeleteBackendResponse;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
