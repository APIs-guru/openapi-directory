import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateBackendConfigPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class CreateBackendConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateBackendConfigRequestBody extends SpeakeasyBase {
    backendManagerAppId?: string;
}
export declare class CreateBackendConfigRequest extends SpeakeasyBase {
    pathParams: CreateBackendConfigPathParams;
    headers: CreateBackendConfigHeaders;
    request: CreateBackendConfigRequestBody;
}
export declare class CreateBackendConfigResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createBackendConfigResponse?: shared.CreateBackendConfigResponse;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
