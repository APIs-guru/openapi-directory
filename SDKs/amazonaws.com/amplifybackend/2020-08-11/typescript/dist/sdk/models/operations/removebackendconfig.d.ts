import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveBackendConfigPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class RemoveBackendConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RemoveBackendConfigRequest extends SpeakeasyBase {
    pathParams: RemoveBackendConfigPathParams;
    headers: RemoveBackendConfigHeaders;
}
export declare class RemoveBackendConfigResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    removeBackendConfigResponse?: shared.RemoveBackendConfigResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
