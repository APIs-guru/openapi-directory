import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RegisterDevicePathParams extends SpeakeasyBase {
    identityId: string;
    identityPoolId: string;
}
export declare class RegisterDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum RegisterDeviceRequestBodyPlatformEnum {
    Apns = "APNS",
    ApnsSandbox = "APNS_SANDBOX",
    Gcm = "GCM",
    Adm = "ADM"
}
export declare class RegisterDeviceRequestBody extends SpeakeasyBase {
    platform: RegisterDeviceRequestBodyPlatformEnum;
    token: string;
}
export declare class RegisterDeviceRequest extends SpeakeasyBase {
    pathParams: RegisterDevicePathParams;
    headers: RegisterDeviceHeaders;
    request: RegisterDeviceRequestBody;
}
export declare class RegisterDeviceResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidConfigurationException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    registerDeviceResponse?: shared.RegisterDeviceResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
