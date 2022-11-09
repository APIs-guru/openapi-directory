import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateApiHeaders extends SpeakeasyBase {
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


// CreateApiRequestBodyCorsConfiguration
/** 
 * Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.
**/
export class CreateApiRequestBodyCorsConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowCredentials" })
  allowCredentials?: boolean;

  @Metadata({ data: "json, name=AllowHeaders" })
  allowHeaders?: string[];

  @Metadata({ data: "json, name=AllowMethods" })
  allowMethods?: string[];

  @Metadata({ data: "json, name=AllowOrigins" })
  allowOrigins?: string[];

  @Metadata({ data: "json, name=ExposeHeaders" })
  exposeHeaders?: string[];

  @Metadata({ data: "json, name=MaxAge" })
  maxAge?: number;
}

export enum CreateApiRequestBodyProtocolTypeEnum {
    Websocket = "WEBSOCKET"
,    Http = "HTTP"
}


export class CreateApiRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKeySelectionExpression" })
  apiKeySelectionExpression?: string;

  @Metadata({ data: "json, name=corsConfiguration" })
  corsConfiguration?: CreateApiRequestBodyCorsConfiguration;

  @Metadata({ data: "json, name=credentialsArn" })
  credentialsArn?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=disableExecuteApiEndpoint" })
  disableExecuteApiEndpoint?: boolean;

  @Metadata({ data: "json, name=disableSchemaValidation" })
  disableSchemaValidation?: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=protocolType" })
  protocolType: CreateApiRequestBodyProtocolTypeEnum;

  @Metadata({ data: "json, name=routeKey" })
  routeKey?: string;

  @Metadata({ data: "json, name=routeSelectionExpression" })
  routeSelectionExpression?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=target" })
  target?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}


export class CreateApiRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateApiHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateApiRequestBody;
}


export class CreateApiResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createApiResponse?: shared.CreateApiResponse;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
