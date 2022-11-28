import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateRouteResponsePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=routeId" })
  routeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=routeResponseId" })
  routeResponseId: string;
}


export class UpdateRouteResponseHeaders extends SpeakeasyBase {
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


export class UpdateRouteResponseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=modelSelectionExpression" })
  modelSelectionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=responseModels" })
  responseModels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=responseParameters", elemType: shared.ParameterConstraints })
  responseParameters?: Map<string, shared.ParameterConstraints>;

  @SpeakeasyMetadata({ data: "json, name=routeResponseKey" })
  routeResponseKey?: string;
}


export class UpdateRouteResponseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateRouteResponsePathParams;

  @SpeakeasyMetadata()
  headers: UpdateRouteResponseHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateRouteResponseRequestBody;
}


export class UpdateRouteResponseResponse extends SpeakeasyBase {
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
  updateRouteResponseResponse?: shared.UpdateRouteResponseResponse;
}
