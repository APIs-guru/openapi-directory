import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestInvokeAuthorizerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=authorizerName" })
  authorizerName: string;
}


export class TestInvokeAuthorizerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// TestInvokeAuthorizerRequestBodyHttpContext
/** 
 * Specifies the HTTP context to use for the test authorizer request.
**/
export class TestInvokeAuthorizerRequestBodyHttpContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @Metadata({ data: "json, name=queryString" })
  queryString?: string;
}


// TestInvokeAuthorizerRequestBodyMqttContext
/** 
 * Specifies the MQTT context to use for the test authorizer request
**/
export class TestInvokeAuthorizerRequestBodyMqttContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


// TestInvokeAuthorizerRequestBodyTlsContext
/** 
 * Specifies the TLS context to use for the test authorizer request.
**/
export class TestInvokeAuthorizerRequestBodyTlsContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=serverName" })
  serverName?: string;
}


export class TestInvokeAuthorizerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=httpContext" })
  httpContext?: TestInvokeAuthorizerRequestBodyHttpContext;

  @Metadata({ data: "json, name=mqttContext" })
  mqttContext?: TestInvokeAuthorizerRequestBodyMqttContext;

  @Metadata({ data: "json, name=tlsContext" })
  tlsContext?: TestInvokeAuthorizerRequestBodyTlsContext;

  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=tokenSignature" })
  tokenSignature?: string;
}


export class TestInvokeAuthorizerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TestInvokeAuthorizerPathParams;

  @Metadata()
  headers: TestInvokeAuthorizerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: TestInvokeAuthorizerRequestBody;
}


export class TestInvokeAuthorizerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  invalidResponseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  testInvokeAuthorizerResponse?: shared.TestInvokeAuthorizerResponse;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedException?: any;
}
