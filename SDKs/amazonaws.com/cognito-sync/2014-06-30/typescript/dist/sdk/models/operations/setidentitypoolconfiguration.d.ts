import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetIdentityPoolConfigurationPathParams extends SpeakeasyBase {
    identityPoolId: string;
}
export declare class SetIdentityPoolConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Configuration options for configure Cognito streams.
**/
export declare class SetIdentityPoolConfigurationRequestBodyCognitoStreams extends SpeakeasyBase {
    roleArn?: string;
    streamName?: string;
    streamingStatus?: shared.StreamingStatusEnum;
}
/**
 * Configuration options to be applied to the identity pool.
**/
export declare class SetIdentityPoolConfigurationRequestBodyPushSync extends SpeakeasyBase {
    applicationArns?: string[];
    roleArn?: string;
}
export declare class SetIdentityPoolConfigurationRequestBody extends SpeakeasyBase {
    cognitoStreams?: SetIdentityPoolConfigurationRequestBodyCognitoStreams;
    pushSync?: SetIdentityPoolConfigurationRequestBodyPushSync;
}
export declare class SetIdentityPoolConfigurationRequest extends SpeakeasyBase {
    pathParams: SetIdentityPoolConfigurationPathParams;
    headers: SetIdentityPoolConfigurationHeaders;
    request: SetIdentityPoolConfigurationRequestBody;
}
export declare class SetIdentityPoolConfigurationResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    setIdentityPoolConfigurationResponse?: shared.SetIdentityPoolConfigurationResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
