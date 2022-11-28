import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateApiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class UpdateApiHeaders extends SpeakeasyBase {
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


// UpdateApiRequestBodyCorsConfiguration
/** 
 * Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.
**/
export class UpdateApiRequestBodyCorsConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowCredentials" })
  allowCredentials?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AllowHeaders" })
  allowHeaders?: string[];

  @SpeakeasyMetadata({ data: "json, name=AllowMethods" })
  allowMethods?: string[];

  @SpeakeasyMetadata({ data: "json, name=AllowOrigins" })
  allowOrigins?: string[];

  @SpeakeasyMetadata({ data: "json, name=ExposeHeaders" })
  exposeHeaders?: string[];

  @SpeakeasyMetadata({ data: "json, name=MaxAge" })
  maxAge?: number;
}


export class UpdateApiRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKeySelectionExpression" })
  apiKeySelectionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=corsConfiguration" })
  corsConfiguration?: UpdateApiRequestBodyCorsConfiguration;

  @SpeakeasyMetadata({ data: "json, name=credentialsArn" })
  credentialsArn?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disableExecuteApiEndpoint" })
  disableExecuteApiEndpoint?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disableSchemaValidation" })
  disableSchemaValidation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=routeKey" })
  routeKey?: string;

  @SpeakeasyMetadata({ data: "json, name=routeSelectionExpression" })
  routeSelectionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class UpdateApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateApiPathParams;

  @SpeakeasyMetadata()
  headers: UpdateApiHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateApiRequestBody;
}


export class UpdateApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateApiResponse?: shared.UpdateApiResponse;
}
