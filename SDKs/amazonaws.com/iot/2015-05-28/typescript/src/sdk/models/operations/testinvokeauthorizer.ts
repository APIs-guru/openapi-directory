import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestInvokeAuthorizerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorizerName" })
  authorizerName: string;
}


export class TestInvokeAuthorizerHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// TestInvokeAuthorizerRequestBodyHttpContext
/** 
 * Specifies the HTTP context to use for the test authorizer request.
**/
export class TestInvokeAuthorizerRequestBodyHttpContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=queryString" })
  queryString?: string;
}


// TestInvokeAuthorizerRequestBodyMqttContext
/** 
 * Specifies the MQTT context to use for the test authorizer request
**/
export class TestInvokeAuthorizerRequestBodyMqttContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


// TestInvokeAuthorizerRequestBodyTlsContext
/** 
 * Specifies the TLS context to use for the test authorizer request.
**/
export class TestInvokeAuthorizerRequestBodyTlsContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serverName" })
  serverName?: string;
}


export class TestInvokeAuthorizerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpContext" })
  httpContext?: TestInvokeAuthorizerRequestBodyHttpContext;

  @SpeakeasyMetadata({ data: "json, name=mqttContext" })
  mqttContext?: TestInvokeAuthorizerRequestBodyMqttContext;

  @SpeakeasyMetadata({ data: "json, name=tlsContext" })
  tlsContext?: TestInvokeAuthorizerRequestBodyTlsContext;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenSignature" })
  tokenSignature?: string;
}


export class TestInvokeAuthorizerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestInvokeAuthorizerPathParams;

  @SpeakeasyMetadata()
  headers: TestInvokeAuthorizerHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: TestInvokeAuthorizerRequestBody;
}


export class TestInvokeAuthorizerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  invalidResponseException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  testInvokeAuthorizerResponse?: shared.TestInvokeAuthorizerResponse;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
