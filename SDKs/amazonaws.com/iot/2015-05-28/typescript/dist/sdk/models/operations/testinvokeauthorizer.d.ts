import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestInvokeAuthorizerPathParams extends SpeakeasyBase {
    authorizerName: string;
}
export declare class TestInvokeAuthorizerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the HTTP context to use for the test authorizer request.
**/
export declare class TestInvokeAuthorizerRequestBodyHttpContext extends SpeakeasyBase {
    headers?: Map<string, string>;
    queryString?: string;
}
/**
 * Specifies the MQTT context to use for the test authorizer request
**/
export declare class TestInvokeAuthorizerRequestBodyMqttContext extends SpeakeasyBase {
    clientId?: string;
    password?: string;
    username?: string;
}
/**
 * Specifies the TLS context to use for the test authorizer request.
**/
export declare class TestInvokeAuthorizerRequestBodyTlsContext extends SpeakeasyBase {
    serverName?: string;
}
export declare class TestInvokeAuthorizerRequestBody extends SpeakeasyBase {
    httpContext?: TestInvokeAuthorizerRequestBodyHttpContext;
    mqttContext?: TestInvokeAuthorizerRequestBodyMqttContext;
    tlsContext?: TestInvokeAuthorizerRequestBodyTlsContext;
    token?: string;
    tokenSignature?: string;
}
export declare class TestInvokeAuthorizerRequest extends SpeakeasyBase {
    pathParams: TestInvokeAuthorizerPathParams;
    headers: TestInvokeAuthorizerHeaders;
    request: TestInvokeAuthorizerRequestBody;
}
export declare class TestInvokeAuthorizerResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    invalidResponseException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    testInvokeAuthorizerResponse?: shared.TestInvokeAuthorizerResponse;
    throttlingException?: any;
    unauthorizedException?: any;
}
