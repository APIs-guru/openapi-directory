import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBackendConfigPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class UpdateBackendConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The request object for this operation.
**/
export declare class UpdateBackendConfigRequestBodyLoginAuthConfig extends SpeakeasyBase {
    awsCognitoIdentityPoolId?: string;
    awsCognitoRegion?: string;
    awsUserPoolsId?: string;
    awsUserPoolsWebClientId?: string;
}
export declare class UpdateBackendConfigRequestBody extends SpeakeasyBase {
    loginAuthConfig?: UpdateBackendConfigRequestBodyLoginAuthConfig;
}
export declare class UpdateBackendConfigRequest extends SpeakeasyBase {
    pathParams: UpdateBackendConfigPathParams;
    headers: UpdateBackendConfigHeaders;
    request: UpdateBackendConfigRequestBody;
}
export declare class UpdateBackendConfigResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateBackendConfigResponse?: shared.UpdateBackendConfigResponse;
}
