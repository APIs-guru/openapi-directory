import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateApiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class UpdateApiHeaders extends SpeakeasyBase {
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


// UpdateApiRequestBodyCorsConfiguration
/** 
 * Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.
**/
export class UpdateApiRequestBodyCorsConfiguration extends SpeakeasyBase {
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


export class UpdateApiRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKeySelectionExpression" })
  apiKeySelectionExpression?: string;

  @Metadata({ data: "json, name=corsConfiguration" })
  corsConfiguration?: UpdateApiRequestBodyCorsConfiguration;

  @Metadata({ data: "json, name=credentialsArn" })
  credentialsArn?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=disableExecuteApiEndpoint" })
  disableExecuteApiEndpoint?: boolean;

  @Metadata({ data: "json, name=disableSchemaValidation" })
  disableSchemaValidation?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=routeKey" })
  routeKey?: string;

  @Metadata({ data: "json, name=routeSelectionExpression" })
  routeSelectionExpression?: string;

  @Metadata({ data: "json, name=target" })
  target?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}


export class UpdateApiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateApiPathParams;

  @Metadata()
  headers: UpdateApiHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateApiRequestBody;
}


export class UpdateApiResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updateApiResponse?: shared.UpdateApiResponse;
}
