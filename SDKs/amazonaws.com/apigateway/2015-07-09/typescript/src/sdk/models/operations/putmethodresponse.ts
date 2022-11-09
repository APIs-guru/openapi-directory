import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutMethodResponsePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=http_method" })
  httpMethod: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=resource_id" })
  resourceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=status_code" })
  statusCode: string;
}


export class PutMethodResponseHeaders extends SpeakeasyBase {
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


export class PutMethodResponseRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=responseModels" })
  responseModels?: Map<string, string>;

  @Metadata({ data: "json, name=responseParameters" })
  responseParameters?: Map<string, boolean>;
}


export class PutMethodResponseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutMethodResponsePathParams;

  @Metadata()
  headers: PutMethodResponseHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutMethodResponseRequestBody;
}


export class PutMethodResponseResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  methodResponse?: shared.MethodResponse;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}
