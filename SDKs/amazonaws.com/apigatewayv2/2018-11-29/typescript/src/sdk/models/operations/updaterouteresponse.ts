import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateRouteResponsePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=routeId" })
  routeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=routeResponseId" })
  routeResponseId: string;
}


export class UpdateRouteResponseHeaders extends SpeakeasyBase {
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


export class UpdateRouteResponseRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=modelSelectionExpression" })
  modelSelectionExpression?: string;

  @Metadata({ data: "json, name=responseModels" })
  responseModels?: Map<string, string>;

  @Metadata({ data: "json, name=responseParameters", elemType: shared.ParameterConstraints })
  responseParameters?: Map<string, shared.ParameterConstraints>;

  @Metadata({ data: "json, name=routeResponseKey" })
  routeResponseKey?: string;
}


export class UpdateRouteResponseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateRouteResponsePathParams;

  @Metadata()
  headers: UpdateRouteResponseHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateRouteResponseRequestBody;
}


export class UpdateRouteResponseResponse extends SpeakeasyBase {
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
  updateRouteResponseResponse?: shared.UpdateRouteResponseResponse;
}
